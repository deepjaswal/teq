import React from 'react'
import uploadBtn from "../../assets/images/png/uploadImg.png"
export const GenrateUser = () => {
  return (
      <div className='w-full common-gradient p-8 rounded-3xl flex flex-col gap-20 animate__animated animate__bounceInLeft animate__delay-1s'>
        <div className='w-full text-center'>
            <div className='bg-[#110A2B] p-3 inline-flex rounded-full'>
                <a href='#' className='btn-gradient rounded-full p-4 px-12 text-[#fff] text-xl font-medium flex items-center justify-center gap-2'><img src={uploadBtn} alt="img"/>Generate</a>
            </div>
        </div>
    </div>
  )
}
