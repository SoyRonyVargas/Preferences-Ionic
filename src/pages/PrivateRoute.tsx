/* eslint-disable @typescript-eslint/no-explicit-any */
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated);
  
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
