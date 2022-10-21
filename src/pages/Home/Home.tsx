import Login from '@/pages/Login';
import Register from '@/pages/Register';

export type HomeProps = {
  login: boolean;
};

const Home = ({ login }: HomeProps) => {
  return (
    <div className="flex items-center justify-center h-screen">
      {login ? <Login /> : <Register />}
    </div>
  );
};

export default Home;
