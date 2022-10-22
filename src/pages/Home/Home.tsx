import Login from '@/pages/Login';
import Register from '@/pages/Register';

export type HomeProps = {
  login: boolean;
};

const Home = ({ login }: HomeProps) => {
  return (
    <div className="flex items-center justify-center h-screen text-gray-800 bg-white dark:bg-gray-800 dark:text-gray-200">
      {login ? <Login /> : <Register />}
    </div>
  );
};

export default Home;
