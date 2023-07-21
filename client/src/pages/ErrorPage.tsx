import { NavLink, useParams } from "react-router-dom";

const ErrorPage = () => {
  const { errorType } = useParams();

  return (
    <div>Oh, this link are wrong ({errorType}). You should go to <NavLink to="/">home page</NavLink>.</div>
  );
};

export default ErrorPage;