import React from 'react'
import style from '../../components/projectManagment/ProjectTimline.module.css'
import Link from 'next/link'
import ProjectTimeline from '../../components/projectManagment/ProjectTimeline'
import { data1, data2, data3, data4 } from '../../constants/projectTimeline'

const ProjectManagment = () => {
    return (
        <main className={style.main}>
            <div>
                <div className='w-full py-6 md:flex text-center justify-evenly items-center border-b border-gray-300'>
                    <p className='font-semibold uppercase'>We Can Add Property</p>
                    <div className='mt-6 md:mt-0'>
                    <Link href="/project/property_list" className="mt-3 hover:border-y-2 hover:text-teal-500 md:hover:border-teal-500 border-y-2 border-transparent  text-gray-700 px-4 py-2">Property List</Link>
                    </div>
                </div>
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