import React from 'react'
import mslogo from '../assets/microsoft_logo.svg'
import { Link } from 'react-router-dom'
function SlideE() {
  return (
    <>
        <div className='pt-32 lg:pt-32 h-96 flex flex-col justify-center items-center mb-20 '>
            <img src={mslogo} className='pb-16 ' alt="" />

            <div className='pb-16 text-lg lg:text-2xl pr-4 pl-4 text-center'>Your Microsoft account connects all your Microsoft apps and services.</div>
            <span className='justify-center '>
            <Link to="/login"><button className='bg-blue-600 pl-3 pr-3 pt-1 pb-1 mr-3 rounded-sm hover:bg-blue-700 hover:underline text-white '>Sign in</button></Link>
                <button className='border-black border pl-3 pr-3 pt-1 pb-1 mr-3 rounded-sm hover:underline hover:bg-[#E2E2E2]'>Create an Account</button>
            </span>
        </div>
    </>
  )
}

export default SlideE