import React from 'react'

const SwitchButton = () => {
    return (
        <div className='w-full common-gradient p-8 rounded-3xl flex flex-col gap-20 animate__animated animate__bounceInLeft animate__delay-1s'>
            <div className=' text-center'>
                {/* <div className='bg-[#110A2B] p-3 inline-flex rounded-full w-[262px]'> */}
                {/* <a href='#' className='btn-gradient rounded-full p-4 px-12 text-[#fff] text-xl font-medium flex items-center justify-center gap-2'><img src={uploadBtn} alt="img"/>Generate</a> */}
                <div class="flex items-center justify-center w-full my-8">
                    <label for="toggle" class="flex items-center cursor-pointer">
                        <input type="checkbox" id="toggle" class="sr-only peer"/>
                            <div class="tooglebtn block relative bg-[#110A2B] w-[180px] h-[72px] p-1 rounded-full before:absolute before:bg-blue-600 before:w-[60px] before:h-[60px] before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-[7rem] peer-checked:before:bg-white"></div>
                    </label>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default SwitchButton