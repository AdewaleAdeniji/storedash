import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cache from "utils/cache";

export const ProtectedRoute = (props) => {
  const { component: Component, ...restOfProps } = props;
  const { loggedin } = Cache.getUser();
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        loggedin ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

export default ProtectedRoute;
