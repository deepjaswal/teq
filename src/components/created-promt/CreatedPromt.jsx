import React from 'react'
import leftImg from "../../assets/images/png/Union-left.png"
import rightImg from "../../assets/images/png/Union-right.png"

const createdPromt = () => {
  return (
     <div className='w-full common-gradient p-8 rounded-3xl flex flex-col gap-8 animate__animated animate__bounceInLeft '>
            <div className='w-full text-center'>
              <h2 className='text-6xl font-semibold  mt-4  blue-linearHeading text-[#fff]'>
                25M
                </h2>
            </div>  
            <div className='w-full flex justify-center relative'>
            <span className='leftImg'><img src ={leftImg}/></span>
            <p className='text-[#aca0e4] create-promt'>created prompts</p>
            <span className='rightImg'><img src ={rightImg}/></span>

            </div>
        </div>
  )
}

export default createdPromt