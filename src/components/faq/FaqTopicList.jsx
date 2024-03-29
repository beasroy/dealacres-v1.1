'use client'

import React from 'react'
import { useState } from 'react'

const FaqTopicList = ({
    title,
    lists,
    hasBorder,
    isGrid
}) => {
   

    const [showFull, setShowFull] = useState(false)
  return (
    <div className={` ${hasBorder && 'border-b border-r-0 lg:border-r lg:border-b-0 border-black'}  ${isGrid && 'px-8' }
    py-4 lg:py-0 lg:mb-4`}>
      { title && <div className='font-bold text-2xl py-2 md:pb-4 '>
        {title}
      </div>}
      <ul className='list-disc font-bold pl-4'>
        {
            lists.map((item, index) => {

                if(index < (Math.floor(lists.length / 2)) || showFull ){
                return (
                    <li key={index} className='py-1'>{item}</li>
                )
                }
            })
        }
      </ul>
      <button className='text-blue-500 font-bold underline'
      onClick={() => setShowFull(prev => !prev)}>{!showFull ? Math.ceil(lists.length / 2) + " more questions" : 'Show Less' } </button>
    </div>
  )
}

export default FaqTopicList
