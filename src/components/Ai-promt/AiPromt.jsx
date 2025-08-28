import React from 'react'
import whitelogo from  "../../assets/images/svg/whitelogo.svg";
export const AiPromt = () => {
  return (
     <div className='inner-curve w-full common-gradient p-8 rounded-3xl flex flex-col gap-20 h-full animate__animated animate__bounceInDown ai-gradient'>
           <div className='w-full text-center'>
               <span className='flex justify-center items-center gap-2'><img src={whitelogo}  alt='whiteLogo'/><span className='text-[#FAF9FF] text-xl font-medium'>PromptPal</span></span>
               <h1 className='lg:text-6xl text-5xl text-[#FAF9FF] font-semibold mt-4'>Your AI Prompt Companion</h1>
           </div>
       </div>
  )
}
