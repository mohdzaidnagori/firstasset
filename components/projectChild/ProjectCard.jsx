import React from 'react'
import style from './ProjectCard.module.css'
import Link from 'next/link'

const ProjectCard = () => {
    return (
        <div className='grid place-items-center'>
            <ul className={`${style.ui} grid md:grid-cols-3 grid-cols-1`}>
                <li className={style.card} style={{ '--accent-color': '#D00903' }}>
                    <div className={`${style.icon} text-4xl font-semibold`}>1</div>
                    <div className={style.title}>Fractional Structure of Investment</div>
                    <div className='relative bg-teal-500 font-medium text-white w-[130px] m-auto my-5 h-[45px] rounded-full overflow-hidden hover:scale-105 transition-all'>
                        <Link className='hover:scale-105 transition-all flex justify-center items-center absolute w-full h-full ' href="fractional/structure_investment">Click Here</Link></div>
                </li>
                <li className={style.card} style={{ '--accent-color': '#EC9E38' }}>
                    <div className={`${style.icon} text-4xl font-semibold`}>2</div>
                    <div className={style.title}>Fractional Why First Asset</div>
                    <div className='relative bg-teal-500 font-medium text-white w-[130px] m-auto my-5 h-[45px] rounded-full overflow-hidden hover:scale-105 transition-all'>
                        <Link className='hover:scale-105 transition-all flex justify-center items-center absolute w-full h-full ' href="fractional/why_first_asset">Click Here</Link></div>
                </li>
                <li className={style.card} style={{ '--accent-color': '#64BECF' }}>
                    <div className={`${style.icon} text-4xl font-semibold`}>3</div>
                    <div className={style.title}>Fractional Investment Process</div>
                    <div className='relative bg-teal-500 font-medium text-white w-[130px] m-auto my-5 h-[45px] rounded-full overflow-hidden hover:scale-105 transition-all'>
                       <Link className='hover:scale-105 transition-all flex justify-center items-center absolute w-full h-full ' href="fractional/investment_process">Click Here</Link></div>
                </li>
            </ul>
        </div>
    )
}

export default ProjectCard