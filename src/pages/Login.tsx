import { Navigate } from "react-router-dom";

const Login = () => {
  const isAuthenticated = true; // call  this state from redux

  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }
  return <>Login</>;
};
export default Login;
