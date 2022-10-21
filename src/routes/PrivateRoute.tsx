import type { ReactElement } from 'react';
import { Navigate } from 'react-router';
import { useStore } from '../store';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  // Replace with your auth condition
  const authToken = sessionStorage.getItem('Auth Token');
  const { isAuthenticated } = useStore((state) => state);

  return authToken && isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
