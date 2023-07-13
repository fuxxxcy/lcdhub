import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProjectPage, ProjectsPage } from "@pages";
import { ProjectPageLoader, ProjectsPageLoader } from "@utils/loaders";
import { Loader } from "@utils/types/Loader";

const apiLink = "http://localhost:4000";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/projects"/>,
    errorElement: <div>wrong link</div>
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
    loader: async () => await ProjectsPageLoader({link: apiLink} satisfies Loader)
  },
  {
    path: "/project/:id",
    element: <ProjectPage />,
    loader: async ({ params }) => await ProjectPageLoader({params, link: apiLink} satisfies Loader)
  }
]);

export default AppRoutes;