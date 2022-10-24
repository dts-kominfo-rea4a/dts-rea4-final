import type { ReactElement } from 'react';
import { Navigate } from 'react-router';
import { useStore } from '@/store/index';
import Header from '@/components/Header';

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const { user } = useStore((state) => state);

  if (user && !user.emailVerified) return <Navigate to="/verify-email" />;
  else if (user && user.emailVerified) return <Navigate to="/games" />;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PublicRoute;
