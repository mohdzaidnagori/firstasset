import React from 'react'
import style from './ProjectTimline.module.css'

const ProjectTimeline = ({ data,h1,h2 }) => {
    return (
        <>
            <div className='flex justify-center items-center flex-col'>
            <h1 className='text-center text-xl font-semibold md:text-2xl mt-10 mb-2 capitalize max-w-[991px]'>{h1}</h1>
            <h1 className='text-center text-xl font-semibold md:text-2xl mb-10 capitalize max-w-[991px]'>{h2}</h1>
            </div>
            <ul className={style.ul}>
                {
                    data?.map((item) => (
                        <li style={{ '--accent-color': item.color }} key={item.heading}>
                            <div className={`${style.date} text-black`}>{item.heading}</div>
                            <div className={style.title}>{item?.title}</div>
                            <div className={style.descr}>{item.paragraph}</div>
                        </li>
                    ))
                }
            </ul>
        </>

    )
}

export default ProjectTimeline