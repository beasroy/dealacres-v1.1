import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const NextArrow = ({
    style, onClick, className
}) => {
  return (
    <div className={` ${className}`}
    onClick={onClick}
    style={{...style}}
    >

        <span className=' bg-sky-600 text-black w-[30px] h-[30px] rounded-full inline-flex items-center justify-center top-[50%] -translate-y-1/2'>

        <AiOutlineArrowRight color="white" size={20}/>
        </span>
    </div>
  )
}

export default NextArrow