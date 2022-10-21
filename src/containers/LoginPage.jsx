import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmail, signInWithGoogle } from "../authentication/firebase";

const LoginPage = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const textFieldHandle = (event) => {
    const name = event.target.name;
    setCredential({
      ...credential,
      [name]: event.target.value,
    });
  };

  const signInHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await signInWithEmail(
      credential.email,
      credential.password
    );

    if (response.hasOwnProperty("code")) {
      switch (response.code) {
        case "auth/invalid-email":
          setErrorMessage("Email tidak valid!");
          break;
        case "auth/user-not-found":
          setErrorMessage("User tidak terdaftar!");
          break;
        case "auth/wrong-password":
          setErrorMessage("Pasword yang anda masukan salah!");
          break;
        case "auth/internal-error":
          setErrorMessage("Terjadi kesalahan internal!");
          break;
        default:
          setErrorMessage("Terjadi kesalahan!");
      }
    } else {
      setErrorMessage(null);
    }
    setIsLoading(false);
  };

  const signInWithGoogleHandler = () => {
    signInWithGoogle();
  };

  return (
    <section className="h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto lg:py-0">
        {errorMessage ? (
          <div className="block w-full max-w-md p-4 mb-4 text-white bg-red-500 rounded-lg text-md">
            <span className="font-medium">Oops!</span> {errorMessage}
          </div>
        ) : (
          ""
        )}

        <div className="w-full bg-white shadow rounded-xl sm:max-w-md md:mt-0 xl:p-0">
          <div className="p-6 space-y-4 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-4"
              action="/"
              method="POST"
              onSubmit={signInHandler}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-800"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="peer block w-full rounded-xl border border-gray-300 bg-gray-50 p-2.5 text-gray-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="name@mail.com"
                  onChange={textFieldHandle}
                />
                <p className="invisible mt-1 text-xs text-pink-500 peer-invalid:visible">
                  Please provide a valid email address.
                </p>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-xl border border-gray-300 bg-gray-50 p-2.5 text-gray-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  onChange={textFieldHandle}
                />
                <p className="invisible mt-1 text-xs text-pink-500 peer-invalid:visible">
                  Please provide a valid password.
                </p>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center w-full rounded-xl border border-primary bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-4 disabled:opacity-75"
                disabled={isLoading ? "disabled" : ""}
              >
                <span className={isLoading ? "" : "hidden"}>
                  <svg
                    className="w-5 h-5 mr-3 text-gray-300 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
                Sign in
              </button>
            </form>
            <button
              onClick={signInWithGoogleHandler}
              className="flex w-full items-center justify-center rounded-xl border border-gray-400 px-5 py-2.5 text-center text-sm font-medium hover:bg-slate-100 focus:outline-none focus:ring-4"
            >
              <svg
                className="mr-2"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path
                    fill="#4285F4"
                    d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                  />
                </g>
              </svg>
              Sign in with Google
            </button>
            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet?{" "}
              <Link
                to="/register"
                className="font-medium text-primary hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
