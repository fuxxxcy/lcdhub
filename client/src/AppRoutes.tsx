import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage, ProjectPage, ProjectsPage } from "@pages";

export const apiLink = "http://localhost:4000";

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
  }
]);

export default AppRoutes;