import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import Preloader from "../Preloader/Preloader";

export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <Preloader />
      </div>
    ),
  });

  return <Component />;
};