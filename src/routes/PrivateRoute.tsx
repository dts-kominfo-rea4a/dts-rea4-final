import { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useStore } from '@/store/index';
import Header from '@/components/Header';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { user } = useStore((state) => state);
  const location = useLocation();

  if (user && !user.emailVerified && location.pathname !== '/verify-email')
    return <Navigate to="/verify-email" />;
  else if (
    user &&
    (user.emailVerified ||
      (!user.emailVerified && location.pathname === '/verify-email'))
  )
    return (
      <>
        <Header />
        {children}
      </>
    );
  return <Navigate to="/" />;
};

export default PrivateRoute;
