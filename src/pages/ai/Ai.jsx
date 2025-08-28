import React, { useState } from 'react'
import CommonCard from "../../common/CommonCard/CommonCard"
import { data } from '../../utils/data'
import Happyusers from '../../components/Happyusers/Happyusers'
import { GenrateUser } from '../../components/GenrateUser/GenrateUser'
import { AiPromt } from '../../components/Ai-promt/AiPromt'
import shareIcon from "../../assets/images/png/shareIcon.png"
import buttontow from "../../assets/images/png/buttontow.png"
import line from "../../assets/images/png/line.png"
import union from "../../assets/images/png/Union.png"
import spheareImg from "../../assets/images/png/Sphere.png"
import 'animate.css'
import SwitchButton from '../../components/SwitchButton/SwitchButton'
import CreatedPromt from '../../components/created-promt/CreatedPromt'
import Promttemplate from '../../components/Promt-template/Promttemplate'
const Ai = () => {
  const [storedata, setStoredata] = useState(data)
  return (
    <div className='w-full p-8 '>
      <div className='grid  lg:grid-cols-4 gap-4 grid-cols-1'>
        <div className='lg:col-span-1 flex flex-col gap-5'>
          <CommonCard />
          <Happyusers />
          <GenrateUser />
        </div>
        <div className='lg:col-span-2 flex gap-5 flex-col items-stretch relative'>
          <AiPromt />
          <div className='flex  gap-5 h-full'>
            <div div className='inverted-radius w-full common-gradient p-8 rounded-3xl  flex items-end  overflow-hidden relative animate__animated animate__slideInUp'>
               <img src ={line}  className='absolute  top-0 left-0' />
              <div>
                <div className='relative z-10'>
                 <img src={shareIcon} alt="icon" className='p-2 bg-[#110A2B] rounded-full '/>
                  <div className='line'></div>
                </div>
                <h4 className='text-[#E6E3FF] text-lg font-bold my-2'>Branching paths</h4>
                <p className='text-[#ACA0E4]'>Explore multiple prompt directions with branching.</p>
              </div>
            </div>

            <div div className='w-full common-gradient p-8 rounded-3xl  flex items-end overflow-hidden relative animate__animated animate__slideInUp'>
             <img src ={union}  className='absolute  top-0 right-0' />
              <div>
               <div className='relative z-10'>
                 <img src={buttontow} alt="icon" className='p-2 bg-[#110A2B] rounded-full '/>
                  <div className='line'></div>
                </div>
                <h4 className='text-[#E6E3FF] text-lg font-bold my-2'>Keyword</h4>
                <p className='text-[#ACA0E4]'>Boost your prompt precision with keywords.</p>
              </div>
            </div>
          </div>

          {/* speare Design */}
          <div className=' absolute top-0 bottom-0 m-auto flex items-center justify-center w-full '>
              <div className=' bg-[#03061C] w-[350px] h-[350px] rounded-full p-4 flex '>
                <img src={spheareImg}/>
              </div>
          </div>
        </div>
        <div className='lg:col-span-1 flex  gap-5 h-full flex-col'>
         <SwitchButton/>
         <CreatedPromt/>
         <Promttemplate/>
        </div>
      </div>
    </div>
  )
}

export default Ai