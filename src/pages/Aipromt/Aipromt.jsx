import React from 'react'
import "./Airpromt.css"
import cardframeone from "../../assets/images/png/cardframeone.png"
import cross from "../../assets/images/png/crossIcon.png"
const Aipromt = () => {
  return (
    <div className='w-full ai-promt '>
        <div className='w-full'>
            <div className='cross-icons absolute right-4 top-6'>
                <img src={cross}/>
            </div>
            <div className='w-full box-data'> 
              <div className='column'>
                <img src={cardframeone} />
                </div>
                <div className='rounded-xl card-gradient w-auto p-6  text-[#fff] column py-10'>
                  <h3 className='text-2xl'>Your AI Prompt Companion</h3>
                  <p className='mt-3 mb-6'>Explore multiple prompt directions with branching. </p>
                  <p>Start  from 2023</p>
                </div>

              <div className='column'>
                  <img src={cardframeone} />
               </div>
                <div className='divider'>
                  <div className='circle'></div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Aipromt