import React from 'react'
import GuideCard from './GuideCard'
import Link from 'next/link'
import {FaExternalLinkAlt} from 'react-icons/fa'
import styles from './styles.module.css'

const Guides = ({
    guides
}) => {
  return (
    <div className='font-bold text-2xl my-4 p-4'>
     <div className='py-2 text-center'>
        Checkout Guides
    </div>
   
    <div className={`${styles.guidesContainer} flex flex-wrap justify-center items-center gap-8`}>
        {
            guides.map((guide, index) => {
                return (
                    <GuideCard title={guide.title} img={guide.img} theme={guide.theme} key={index} />
                )
            })
        }
    </div>

<div className='flex flex-col py-4 px-2'>

    <span className='md:self-end text-blue-500 flex items-center justify-center gap-2'>
    <Link href='/guides' className=' text-base  '>View More</Link>
    <FaExternalLinkAlt size={20}/>
    </span>

</div>
    </div>
  )
}

export default Guides
