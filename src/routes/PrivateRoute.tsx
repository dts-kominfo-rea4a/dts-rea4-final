import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '@/store/index';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { user } = useStore((state) => state);

  if (user && !user.emailVerified) return <Navigate to="/verify-email" />;
  else if (user && user.emailVerified) return children;
  return <Navigate to="/" />;
};

export default PrivateRoute;
