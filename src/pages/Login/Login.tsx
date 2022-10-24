import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/Button';
import Input from '@/components/Input/Input';
import { LoginBody } from '@/types/auth';
import { loginSchema } from '@/lib/validation';
import { useLoginQuery } from '@/services/queries/auth.query';
import { useStore } from '@/store/index';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useStore((state) => state);
  const { isLoading, mutateAsync: login, isError, error } = useLoginQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>({ resolver: yupResolver(loginSchema) });

  useEffect(() => {
    if (isError) {
      toast.error(error as string, { theme: 'colored' });
    }
  }, [isError]);

  const onSubmit: SubmitHandler<LoginBody> = async (data) => {
    const isLogin = await login(data);
    setUser(isLogin);
    setIsAuthenticated(!!isLogin);
  };

  return (
    <form
      className="m-auto w-[90%] md:w-[30%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        errors={errors}
        placeholder="Email"
        label="Email"
        id="email"
        register={register}
        name="email"
        type="email"
      />
      <Input
        errors={errors}
        placeholder="Password"
        label="Password"
        type="password"
        register={register}
        name="password"
      />
      <Button text="Login" type="submit" isLoading={isLoading} />
      <p className="mb-2 text-sm text-center">
        Doesn&apos;t have a account? go to{' '}
        <span
          className="underline cursor-pointer"
          onClick={() => navigate('/register')}
        >
          register page
        </span>
      </p>
    </form>
  );
};

export default Login;
