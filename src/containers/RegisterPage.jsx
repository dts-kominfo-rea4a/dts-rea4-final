import { useState } from "react";
import { Link } from "react-router-dom";
import { signUpWithEmail } from "../auth/firebase";

const RegisterPage = () => {
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
    const response = await signUpWithEmail(
      credential.email,
      credential.password
    );

    if (response.hasOwnProperty("code")) {
      switch (response.code) {
        case "auth/invalid-email":
          setErrorMessage("Email yang digunakan tidak valid!");
          break;
        case "auth/email-already-in-use":
          setErrorMessage("Email ini sudah pernah didaftarkan!");
          break;
        case "auth/weak-password":
          setErrorMessage("Pasword terlalu lemah, minimal 6 karakter!");
          break;
        case "auth/internal-error":
          setErrorMessage("Terdapat kesalahan internal");
          break;
        default:
          setErrorMessage("Terjadi kesalahan!");
      }
    } else {
      setErrorMessage(null);
    }
    setIsLoading(false);
  };

  return (
    <section className="flex flex-col justify-center min-h-screen py-12 bg-gray-200 sm:px-6 lg:px-8">
      <div className="mt-8 px-2 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mb-5 text-2xl font-extrabold text-center text-gray-900 leading-9">
              Register your account
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
                  Register
                </button>
              </span>

              <p className="mt-6 text-sm text-center text-gray-600 leading-5 max-w">
                Or{" "}
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Log In to Your Account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
