import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'

const Contact = () => {
  return (
    <section className='lg:p-10'>
      <h2 className='text-4xl md:text-6xl font-semibold text-center lg:pb-20 p-10'>Contact Us</h2>
      <div className='w-full lg:h-[80vh] h-screen relative lg:rounded overflow-hidden'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3768.8131445811564!2d72.8484522749319!3d19.159654849341585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1687189176489!5m2!1sen!2sin" width='100%' height='100%' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="absolute lg:top-0 bottom-0 lg:right-0 h-[50%] lg:h-full lg:w-[50%] w-full bg-teal-900 flex justify-center items-center">
          <div className='text-white h-full lg:w-[70%] px-2'>
            <h3 className='text-4xl lg:text-5xl font-semibold lg:pt-16 pt-10'>Get In Touch</h3>
            <p className='text-[18px] lg:pt-4 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium delectus debitis pariatur molestias blanditiis!</p>
            <h5 className='flex gap-3 items-center pt-4 lg:text-xl'><span className='mb-1 text-4xl'><AiOutlineMail /></span>Skilliza@gmail.com</h5>
            <h5 className='flex gap-3 items-center pt-4 lg:text-xl'><span className='mb-1 text-4xl'><AiOutlinePhone /></span>+91123456354</h5>
            <h5 className='flex gap-3 items-center pt-4 lg:text-xl'><span className='mb-1 text-4xl'><CiLocationOn /></span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat suscipit reprehenderit officia est facilis commodi quia eligendi fugit neque iusto.</h5>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Contact