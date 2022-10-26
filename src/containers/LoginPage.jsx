import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmail, signInWithGoogle } from "../auth/firebase";

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
    setErrorMessage("");
  };

  const formHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await signInWithEmail(
      credential.email,
      credential.password
    );

    if (response.hasOwnProperty("code")) {
      switch (response.code) {
        case "auth/invalid-email":
          setErrorMessage("Alamat Email tidak valid!");
          break;
        case "auth/user-not-found":
          setErrorMessage("User tidak terdaftar!");
          break;
        case "auth/wrong-password":
          setErrorMessage("Pasword yang anda masukan salah!");
          break;
        case "auth/internal-error":
          setErrorMessage("Terdapat kesalahan internal!");
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
    <section className="flex flex-col justify-center min-h-screen py-12 bg-gray-200 sm:px-6 lg:px-8">
      <div className="mt-8 px-2 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mb-5 text-2xl font-extrabold text-center text-gray-900 leading-9">
              Sign in to your account
            </h2>
          </div>
          {errorMessage ? (
            <div className="block w-full max-w-md p-4 mb-4 text-white bg-red-400 rounded-lg text-md">
              <span className="font-medium">Oops!</span> {errorMessage}
            </div>
          ) : (
            ""
          )}
          <form action="/" method="POST" onSubmit={formHandler}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-800 leading-5"
              >
                Email Address
              </label>

              <div className="mt-1">
                <input
                  id="email"
                  onChange={textFieldHandle}
                  name="email"
                  type="email"
                  required=""
                  autoFocus={true}
                  value={credential.email}
                  placeholder="user@mail.com"
                  className="peer appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
                <p className="invisible mt-1 text-xs text-pink-500 peer-invalid:visible">
                  Please provide a valid email address.
                </p>
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700 leading-5"
              >
                Password
              </label>

              <div className="mt-1">
                <input
                  id="password"
                  onChange={textFieldHandle}
                  type="password"
                  name="password"
                  required=""
                  placeholder="ketikkan password"
                  value={credential.password}
                  className="peer appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
                <p className="invisible mt-1 text-xs text-pink-500 peer-invalid:visible">
                  Please provide a valid password.
                </p>
              </div>
            </div>

            <div className="mt-3">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  disabled={isLoading ? "disabled" : ""}
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                >
                  <span className={isLoading ? "" : "hidden"}>
                    <svg
                      version="1.1"
                      id="L5"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="40px"
                      height="20px"
                      viewBox="0 0 80 30"
                    >
                      <circle fill="#fff" stroke="none" cx="6" cy="20" r="6">
                        <animateTransform
                          attributeName="transform"
                          dur="1s"
                          type="translate"
                          values="0 15 ; 0 -15; 0 15"
                          repeatCount="indefinite"
                          begin="0.1"
                        />
                      </circle>
                      <circle fill="#fff" stroke="none" cx="30" cy="20" r="6">
                        <animateTransform
                          attributeName="transform"
                          dur="1s"
                          type="translate"
                          values="0 10 ; 0 -10; 0 10"
                          repeatCount="indefinite"
                          begin="0.2"
                        />
                      </circle>
                      <circle fill="#fff" stroke="none" cx="54" cy="20" r="6">
                        <animateTransform
                          attributeName="transform"
                          dur="1s"
                          type="translate"
                          values="0 5 ; 0 -5; 0 5"
                          repeatCount="indefinite"
                          begin="0.3"
                        />
                      </circle>
                    </svg>
                  </span>
                  Log In
                </button>
              </span>
              <span className="block py-3 w-full rounded-md shadow-sm">
                <button
                  type="button"
                  onClick={signInWithGoogleHandler}
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium bg-white-600 border border-gray-600 rounded-md hover:bg-gray-200 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="20px"
                    height="20px"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  {"  "}
                  Log in with Google
                </button>
              </span>

              <p className="mt-6 text-sm text-center text-gray-600 leading-5 max-w">
                Or{" "}
                <Link
                  to="/register"
                  className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  create a new account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
