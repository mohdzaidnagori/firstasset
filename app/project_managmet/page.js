import React from 'react'
import style from '../../components/projectManagment/ProjectTimline.module.css'
import ProjectTimeline from '../../components/projectManagment/ProjectTimeline'
import { data1, data2, data3, data4 } from '../../constants/projectTimeline'
import PropertListnavbar from '../../components/projectManagment/PropertListnavbar'

const ProjectManagment = () => {
    return (
        <main className={style.main}>
            <div>
               <PropertListnavbar />
                <h1 className='text-center font-semibold text-3xl md:text-5xl my-10 capitalize'>Property Management</h1>
                <p className='md:text-lg text-base text-gray-500 text-center'>We provides the expertise, inspiration, and creativity needed to effectively
                    manage operations for and enhance the value of assets</p>
            </div>
            <ProjectTimeline data={data1} h1='We&#39;re experts in' />
            <ProjectTimeline data={data2} h1='Property Management' />
            <ProjectTimeline data={data3} h1='Property Management Accounting' />
            <ProjectTimeline data={data4} h1='Office Leasing' />
        </main>
    )
}

export default ProjectManagment