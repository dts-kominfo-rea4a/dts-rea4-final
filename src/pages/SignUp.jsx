import React, {useState,} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signUp, addFirebaseUser } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      await addFirebaseUser(email);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='w-full h-screen'>
      <img 
        className='hidden sm:block absolute w-full h-full object-cover'
        src="https://rare-gallery.com/uploads/posts/1027858-landscape-sunset-nature-reflection-photography-sunrise-Norway-village-evening-morning-Sun-fjord-dusk-Lofoten-Islands-midnight-cloud-mountain-dawn-screenshot-atmospheric.jpg" alt="" />
        <div className='bg-black/80 fixed top-0 left-0 w-full h-screen'>
          <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/40 text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                  <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-900 rounded' type="email" placeholder='Email' autoComplete='email' />
                  <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-900 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                  <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                  <div className='flex  justify-between items-center text-sm text-gray-700'>
                    <p>
                      <input type="checkbox" className='w-4 h-4 accent-red-500 bg-gray-100 rounded border-gray-300 focus:ring-2'/> Remember me
                    </p>
                    <p>Need Help?</p>
                  </div>
                    <p className='py-4 text-center'>
                      <span className='text-gray-600'>Already have an account?</span> {' '} 
                      <span className='text-red-600'>
                        <Link to={'/login'}>
                          Sign In
                        </Link>
                      </span></p>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignUp