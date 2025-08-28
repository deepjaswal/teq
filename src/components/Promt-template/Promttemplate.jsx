import React from 'react'
import promtframe from "../../assets/images/png/promtframe.png" 
const Promttemplate = () => {
  return (
 <div div className='w-full common-gradient p-8 rounded-3xl  flex items-end overflow-hidden relative animate__animated animate__slideInUp flex-col'>
             {/* <img src ={union}  className='absolute  top-0 right-0' /> */}
              <div className='w-full'>
                <h4 className='text-[#E6E3FF] text-lg font-bold my-2'>Prompt templates</h4>
                <p className='text-[#ACA0E4]'>Use pre-made templates to jumpstart creativity.</p>
              </div>
              <div className='w-full mt-5 flex justify-end'>
                <img src={promtframe}/>
              </div>
            </div>
  )
}

export default Promttemplate