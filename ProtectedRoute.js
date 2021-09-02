import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from './../../Context/authContext';

const ProtectedRoute = (props) => {
  const authContext = useContext(AuthContext);

  const Component = props.component;
  const isAuthenticated = authContext.isAuth; //props.isAuthenticated;
  return (
    <Route
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          );
        }
      }}
    ></Route>
  );
};
export default ProtectedRoute;
