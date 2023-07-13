import { createBrowserRouter } from "react-router-dom";
import { ProjectPage } from "@/pages";
import { ProjectPageLoader } from "@utils/loaders";
import { Loader } from "@utils/types/Loader";

const apiLink = "http://localhost:4000";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <div>Home page</div>,
    errorElement: <div>wrong link</div>
  },
  {
    path: "/project/:id",
    element: <ProjectPage />,
    loader: async ({ params }) => await ProjectPageLoader({params, link: apiLink} satisfies Loader)
  }
]);

export default AppRoutes;