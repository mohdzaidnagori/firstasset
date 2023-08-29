import React from 'react'
import style from './ProjectCard.module.css'
import Link from 'next/link'

const ProjectCard = ({heading,link,color,icon}) => {
    return (
                <li className={style.card} style={{ '--accent-color': color }}>
                    <div className={`${style.icon} text-2xl font-semibold bg-red-500`}>{icon}</div>
                    <div className={style.title}>{heading}</div>
                    <div className='relative bg-teal-500 font-medium text-white w-[130px] m-auto my-5 h-[45px] rounded-full overflow-hidden hover:scale-105 transition-all'>
                        <Link className='hover:scale-105 transition-all flex justify-center items-center absolute w-full h-full ' href={link}>Click Here</Link></div>
                </li>
    )
}

export default ProjectCard