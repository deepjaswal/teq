import React from 'react'
import "./Happyuser.css"
import user from  "../../assets/images/png/image1.png" 
const Happyusers = () => {
  return (
     <div className='w-full common-gradient p-8 rounded-3xl flex flex-col gap-6 animate__animated animate__bounceInLeft'>
        <div className='w-full text-center'>
          <h2 className='text-6xl font-semibold text-[#fff] mt-4  gradient-text'>12K</h2>
          <p className='text-[#B2A1FD] text-lg'>happy users</p>
        </div>
        <div className='w-full flex justify-center'>
            <span>
              <img src={user} alt='img1'/>
            </span>
             <span className='image-two'>
              <img src={user} alt='img1'/>
            </span>
             <span className='image-three'>
              <img src={user} alt='img1'/>
            </span>
        </div>
    </div>
  )
}

export default Happyusers