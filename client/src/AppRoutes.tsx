import { createBrowserRouter, Navigate } from "react-router-dom";
import { Authentification, ErrorPage, FillBalancePage, ProjectPage, ProjectsPage } from "@pages";

export const apiLink = "http://127.0.0.1:4000";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/projects"/>,
    errorElement: <div>wrong link</div>
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/project/:id",
    element: <ProjectPage />,
  },
  {
    path: "/error/:errorType",
    element: <ErrorPage />,
  },
  {
    path: "/auth/discord",
    element: <Authentification type="discord" />
  },
  {
    path: "/fillbalance",
    element: <FillBalancePage/>
  }
]);

export default AppRoutes;