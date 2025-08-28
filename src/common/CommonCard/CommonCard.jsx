import React from 'react'
import logo from "../../assets/images/svg/logo.svg";

const CommonCard = () => {
  
  return (
    <div className='w-full common-gradient p-8 rounded-3xl flex flex-col lg:gap-[160px] gap-6 animate__animated animate__bounceInLeft'>
        <div className='w-full'>
          <img src ={logo} alt='userImg'/>
          <h1 className='text-4xl font-semibold text-[#fff] mt-4 pr-8'>Effortless Prompt Perfection</h1>
        </div>
        <div>
          <p className='text-[#fff] text-lg'>14 days trial</p>
          <span className='text-base text-[#ACA0E4]'>after – $5/month</span>
        </div>
    </div>
  )
}

export default CommonCard