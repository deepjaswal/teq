import React, { useState } from 'react'
import "./Airpromt.css"
import cardframeone from "../../assets/images/png/cardframeone.png"
import cross from "../../assets/images/png/crossIcon.png"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";



const tabs = [
  {
    id: 1,
    title: "Your AI Prompt Companion",
    description: "Explore multiple prompt directions with branching.",
    date: "Start from 2023",
  },
  {
    id: 2,
    title: "Growth Tools",
    description: "Smart AI integrations to scale your workflow.",
    date: "Start from 2024",
  },
  {
    id: 3,
    title: "Future Vision",
    description: "Innovations designed for tomorrow’s challenges.",
    date: "Coming Soon",
  },
];
const Aipromt = () => {
  // return (
  //   // <div className='w-full ai-promt '>
  //   //     {/* <div className='w-full'>
  //   //         <div className='cross-icons absolute right-4 top-6'>
  //   //           <Link to= "/">
  //   //             <img src={cross}/>
  //   //           </Link>
  //   //         </div>
  //   //         <div className='w-full box-data'> 
  //   //           <div className='column'>
  //   //             <img src={cardframeone} />
  //   //             </div>
  //   //             <div className='rounded-xl card-gradient w-auto p-6  text-[#fff] column py-10'>
  //   //               <h3 className='text-2xl'>Your AI Prompt Companion</h3>
  //   //               <p className='mt-3 mb-6'>Explore multiple prompt directions with branching. </p>
  //   //               <p>Start  from 2023</p>
  //   //             </div>

  //   //           <div className='column'>
  //   //               <img src={cardframeone} />
  //   //            </div>
  //   //             <div className='divider'>
  //   //               <div className='circle'></div>
  //   //             </div>
  //   //         </div>

  //   //     </div> */}
  //   // </div>


  // )

  const [activeTab, setActiveTab] = useState(1);

  // function to move to next tab on card click
  const handleCardClick = (e) => {
    // setActiveTab((prev) => (prev === tabs.length ? 1 : prev + 1));
    setActiveTab(e)
    
  };

  return (
    <div className="flex items-start gap-10 bg-[#0b0b1a] min-h-screen text-white p-12 ai-promt relative">
      {/* Left side (line + circles) */}
     

      {/* Right side (content card → also clickable) */}
      <div className='max-w-[900px] w-full m-auto relative'>
         <div className="absolute left-0 right-0 m-auto h-[100%] flex flex-col items-center">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-400 to-indigo-600"></div>

         {tabs.map((tab) => (
           <button
             key={tab.id}
             onClick={() => setActiveTab(tab.id)}
             className="relative z-10 mb-10 tabbing-btns"
           >
             <motion.div
               className={`w-5 h-5 rounded-full border-2 opacity-0 ${activeTab === tab.id
                   ? "active-tab"
                   : ""
                 }`}
               whileTap={{ scale: 0.8 }}
               whileHover={{ scale: 1.1 }}
             />
           </button>
         ))}
      </div>
        {
          tabs.map((tab) => (
            <motion.div
              key={tab.id} // 👈 card click switches to next tab
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className={`tabbings cursor-pointer p-6 w-[360px] rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 shadow-xl tab-${tab.id} ${tab.id === activeTab ? 'tab-active' :''}`}
              onClick={() => handleCardClick(tab.id)}
            >
              <h2 className="text-xl font-bold">{tab.title}</h2>
              <p className="mt-2 text-sm">{tab.description}</p>
              <span className="mt-3 block text-xs text-gray-200">
                {tab.date}
              </span>
            </motion.div>
          ))
        }

      </div>
    </div>
  );
}

export default Aipromt