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
    <div className="h-screen App">
      <p className="m-4 font-normal text-center text-gray-800">
        You need verified before access. Please check your email for
        verification process.
      </p>
    </div>
  );
};

export default VerifyEmail;
