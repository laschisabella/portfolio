import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

export default function Profile() {
  return (
    <div className='w-4/7 h-screen p-12 flex justify-end mr-[200px] font-roboto'>
      <div className='max-w-xl text-center flex flex-col justify-center mr-8'>
        <img
          className='w-1/4 mx-auto'
          src="https://github.com/laschisabella.png"
          alt="Profile picture"
        />
        <h1 className=' font-mono text-5xl mt-12 mb-3'><span className='text-gray-200'>&#60;</span>Isabella Laschi <span className='text-gray-200'>/&#62;</span></h1>
        <h2 className='text-3xl mb-12 font-bold'>full stack web developer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='flex justify-center m-5 gap-2'>
          <AiOutlineMail className='text-2xl' />
          <span className='leading-6 font-bold transition hover:text-gray-500'><a href="mailto:laschi.isabella@gmail.com">laschi.isabella@gmail.com</a></span>
        </div>
        <div className='flex justify-center items-center gap-3 mt-12'>
          <a
            href="https://linkedin.com/in/isabella-laschi"
            className='text-4xl p-1 transition hover:bg-black hover:text-white'
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/laschisabella"
            target="_blank"
            className='text-4xl p-1 transition hover:bg-black hover:text-white'
          >
            <GoMarkGithub />
          </a>
          <a
            href=""
            target="_blank"
            className='bg-black text-white px-8 py-1 ml-10 border-2 border-black font-bold transition hover:bg-white hover:text-black'
          >
            resume
          </a>
        </div>
      </div>
    </div>
  )
}