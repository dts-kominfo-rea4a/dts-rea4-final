import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/store/index';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { user } = useStore((state) => state);

  useEffect(() => {
    if (!user) navigate('/');
    else if (user?.emailVerified) navigate('/games');
  }, [user]);

  return (
    <div className="flex items-center justify-center order-2 h-screen text-gray-800 bg-white -z-50 dark:bg-gray-800 dark:text-gray-200">
      <p className="m-4 font-normal text-center">
        You need verified before access. Please check your email for
        verification process.
      </p>
    </div>
  );
};

export default VerifyEmail;
