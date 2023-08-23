import React from 'react'
import style from '../../components/projectManagment/ProjectTimline.module.css'
import ProjectTimeline from '../../components/projectManagment/ProjectTimeline'
import { data1 } from '../../constants/projectTimeline'
import PropertListnavbar from '../../components/projectManagment/PropertListnavbar'
import TypeCardsproperty from '../../components/card/TypeCardsproperty'
import ProjectManagmentHome from '../../components/swiper/ProjectManagment'

const ProjectManagment = () => {
    return (
        <>
            <div className={`${style.headermain}`}>
                <PropertListnavbar />
                <h1 className='text-center font-semibold text-3xl md:text-5xl my-10 capitalize'>Property Management</h1>
                <div className="flex justify-center flex-col lg:flex-row items-center gap-10 mx-auto">
                    <TypeCardsproperty
                        heading='@ 7.5 % of monthly rent'
                        paragraph='Leasing services'
                        optional = ''
                    />
                    <TypeCardsproperty
                        heading='@ Rs 9999/- per annum per asset'
                        paragraph='Asset Care Services'
                        optional = '(Optional)'
                    />
                </div>
            </div>
            <main className={style.main}>
                <ProjectTimeline data={data1} h1='We welcome you to use our expertise in' />
            </main >
            <section className={`${style.headermain} p-4 pt-8`}>
                <ProjectManagmentHome />
            </section>
        </>

    )
}

export default ProjectManagment