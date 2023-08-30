import React from 'react'
import style from '../../components/projectManagment/ProjectTimline.module.css'
import ProjectTimeline from '../../components/projectManagment/ProjectTimeline'
import { data1, data2 } from '../../constants/projectTimeline'
import PropertListnavbar from '../../components/projectManagment/PropertListnavbar'
import TypeCardsproperty from '../../components/card/TypeCardsproperty'
import ProjectManagmentHome from '../../components/swiper/ProjectManagment'
import Link from 'next/link'

const ProjectManagment = () => {
    return (
        <>
            <div className={`${style.headermain}`}>
                <PropertListnavbar />
                <h2 className='text-2xl md:text-4xl font-semibold capitalize text-center py-6'>Property Management</h2>
                <div className="flex justify-center flex-col lg:flex-row items-center gap-10 mx-auto">
                    <TypeCardsproperty
                        heading='@ 7.5 % of monthly rent'
                        paragraph='Leasing Services'
                    />
                    <TypeCardsproperty
                        heading='@ Rs 9999/- per annum per asset'
                        paragraph='Asset Care Services'
                    />
                </div>
            </div>
            <main className={style.main}>
                <ProjectTimeline data={data1}
                    h1='Your Property Our Priority.'
                    h2=' 
                     Simplify Ownership with Expert Property Management Services.'
                />
            </main >
            <section className="bg-white p-4">
              <h1 className="text-3xl p-3 font-semibold">Properties on Sale/Rent Under Our Management</h1>
              <ProjectManagmentHome />
            </section>
        </>

    )
}

export default ProjectManagment