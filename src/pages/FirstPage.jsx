import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../authentication/firebase";

const FirstPage = () => {
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);
  useEffect(
    () => {
      // Nah di sini mungkin kita bisa modifikasi / menggunakan
      // isLoading sebagai logic untuk menampilkan loading screen
      // (pada pembelajaran ini loading screen tidak dibuat)
      if (isLoading) {
        // Tampilkan loading screen (bila ada)
        return;
      }

      // Lalu apabila usernya ditemukan (ada / tidak null)
      // Maka akan kita navigasikan ke halaman HomePage
      if (user) {
        navigate("/home");
      }
    },
    // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
    [user, isLoading, navigate]
  );
  return (
    // <div className='text-white'>
    //   <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
    //     <h1 className='md:text-5xl sm:text-5xl text-3xl font-bold md:py-6'>
    //       Unlimited movies, Show, and more
    //     </h1>
    //     <div className='flex justify-center items-center'>
    //       <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
    //         Watch everywhere.
    //       </p>
    //       {/* <Typed
    //       className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
    //         strings={['TV', 'Shows', 'and more']}
    //         typeSpeed={140}
    //         backSpeed={180}
    //         loop
    //       /> */}
    //     </div>
    //     <p className='md:text-2xl text-xl font-bold text-gray-500'>Ready to watch? Enter your email to create or restart your membership.</p>
    //     <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
    //   </div>
    // </div>
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/80 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="mt-[80px] w-full h-screen text-center flex-col justify-center text-white">
            <h1 className="md:text-6xl sm:text-6xl text-3xl font-bold md:py-6">
              Unlimited movies, Show, and more
            </h1>
            <div className="flex justify-center items-center">
              <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                Watch everywhere.
              </p>
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <Link to="/register">
              <button className="bg-red-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
