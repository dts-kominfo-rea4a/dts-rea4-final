import { useState } from "react";

import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import Iconify from "../../components/iconify"
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';


import { signInWithGoogle, signInWithGithub, sigInWithEmail } from "../../authentication/firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const inputEmailOnChangeHandler = (evt) => {
    setEmail(evt.target.value);
  };

  const inputPasswordOnChangeHandler = (evt) => {
    setPassword(evt.target.value);
  };

  const formOnSubmitHandler = (evt) => {
    evt.preventDefault();
    sigInWithEmail(email,password);
  };

  const githubOnClickHandler = (evt) => {
    signInWithGithub();
  };

  const googleOnClickHandler = (evt) => {
    signInWithGoogle();
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={formOnSubmitHandler}>
      {/* Github Login */}
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <div className="text-center">
        <p className="font-semibold text-slate-700">Login Form</p>
      </div>

      <div>
        <input
          className="py-2 px-4 border border-gray-200 w-full"
          type="text"
          placeholder="Email"
          value={email}
          onChange={inputEmailOnChangeHandler}
        />
      </div>

      <div>
        <input
          className="py-2 px-4 border border-gray-200 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={inputPasswordOnChangeHandler}
        />
      </div>

      <div>
        <button
          type="submit"
          className="py-2 px-4 bg-slate-200 hover:bg-slate-300 flex flex-row gap-1 items-center rounded-full w-full"
        >
          Login
        </button>
      </div>

      <div>
        <hr />
      </div>

      <div>
        <Link
          to="/register"
          className="underline text-blue-400 hover:text-blue-500"
        >
          No Account yet? Wanna register?
        </Link>
      </div>

      <div>
        <hr />
      </div>

      <div>
        <p className="text-slate-700 text-center">Or sign in with ...</p>
      </div>

      <div className="flex flex-row gap-2">
        <button
          className="py-2 px-4 bg-slate-200 hover:bg-slate-300 flex flex-row gap-1 items-center rounded-full"
          type="button"
          onClick={githubOnClickHandler}
        >
          <GitHubIcon width="24" height="24" />
          <span>Github</span>
        </button>

        <button
          className="py-2 px-4 bg-slate-200 hover:bg-slate-300 flex flex-row gap-1 items-center rounded-full"
          type="button"
          onClick={googleOnClickHandler}
        >
          <GoogleIcon width="24" height="24" />
          <span>Google</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
