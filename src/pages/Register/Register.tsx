import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/Button';
import Input from '@/components/Input/Input';
import { RegisterBody } from '@/types/auth';
import { registerSchema } from '@/lib/validation';
import { useRegisterQuery } from '@/services/queries/auth.query';
import { useStore } from '@/store/index';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useStore((state) => state);
  const {
    isLoading,
    mutateAsync: registerUser,
    isError,
    error,
  } = useRegisterQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterBody>({ resolver: yupResolver(registerSchema) });

  useEffect(() => {
    if (isError) {
      toast.error(error as string, { theme: 'colored' });
    }
  }, [isError]);

  const onSubmit: SubmitHandler<RegisterBody> = async (data) => {
    const isRegistered = await registerUser(data);
    setIsAuthenticated(isRegistered);
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
      <Button text="Register" type="submit" isLoading={isLoading} />
      <p className="mb-2 text-sm text-center">
        Have an account? go to{' '}
        <span
          className="underline cursor-pointer"
          onClick={() => navigate('/')}
        >
          login page
        </span>
      </p>
    </form>
  );
};

export default Register;
