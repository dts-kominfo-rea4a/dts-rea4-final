import React from 'react'


const FirstPage = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-5xl sm:text-5xl text-3xl font-bold md:py-6'>
          Unlimited movies, Show, and more
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Watch everywhere.
          </p>
          {/* <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['TV', 'Shows', 'and more']}
            typeSpeed={140}
            backSpeed={180}
            loop
          /> */}
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Ready to watch? Enter your email to create or restart your membership.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default FirstPage