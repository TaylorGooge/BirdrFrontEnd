import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Link className="nav-link" onClick={() =>  loginWithRedirect()}>Login</Link>
      )
};

export default LoginButton;
