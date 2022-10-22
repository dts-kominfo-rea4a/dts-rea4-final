import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signUpWithEmail } from "../authentication/firebase";

const RegisterPage = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
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

  const signUpHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await signUpWithEmail(
      credential.email,
      credential.password
    );

    if (response.hasOwnProperty("code")) {
      switch (response.code) {
        case "auth/invalid-email":
          setErrorMessage("Email not valid!");
          break;
        case "auth/email-already-in-use":
          setErrorMessage("Email already registered!");
          break;
        case "auth/weak-password":
          setErrorMessage("Weak password, minimum 6 character!");
          break;
        case "auth/internal-error":
          setErrorMessage("There is an internal error!");
          break;
        default:
          setErrorMessage("There is an error!");
      }
    } else {
      setErrorMessage(null);
    }
    setIsLoading(false);
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
              Create and account
            </h1>
            <form
              className="space-y-4 md:space-y-4"
              action="/"
              method="POST"
              onSubmit={signUpHandler}
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
                Sign up
              </button>
            </form>
            <p className="text-sm font-light text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
