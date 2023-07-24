import React from 'react'
import style from './ProjectTimline.module.css'

const ProjectTimeline = ({ data,h1 }) => {
    return (
        <>
            <h1 className='text-center font-semibold text-2xl md:text-4xl my-10 capitalize'>{h1}</h1>
            <ul className={style.ul}>
                {
                    data?.map((item) => (
                        <li style={{ '--accent-color': item.color }} key={item.heading}>
                            <div className={style.date}>{item.heading}</div>
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