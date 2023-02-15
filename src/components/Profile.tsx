import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { SlGlobe } from 'react-icons/sl';

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import enResume from '../assets/isabella-laschi-en.pdf'
import ptResume from '../assets/isabella-laschi-pt.pdf'

export default function Profile() {

  const { t, i18n } = useTranslation()

  // detect browser language for first render
  useEffect(() => {
    i18n.changeLanguage(navigator.language)
  }, [])

  const [resumeFile, setResumeFile] = useState((navigator.language.startsWith("pt")) ? ptResume : enResume)

  const handleChangeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value)
    // change resume file
    if (event.target.value == "pt") {
      setResumeFile(ptResume)
    } else {
      setResumeFile(enResume)
    }
  }

  return (
    <div className='w-full md:h-screen p-12 flex font-roboto justify-center md:mr-10 md:justify-end'>
      <div className='max-w-xl text-center md:mt-8 2xl:mt-20'>
        <div className='mb-5 flex gap-2 justify-center items-center'>
          <SlGlobe />
          <select
            className=' p-2 m-0 cursor-pointer text-center'
            onChange={handleChangeLanguage}
          >
            <option value="la" >{t('language.lang')}</option>
            <option value="en">{t('language.english')}</option>
            <option value="pt">{t('language.portuguese')}</option>
          </select>
          <div className="ml-2 bg-black text-white px-8 py-1 ml-10 border-2 border-black font-bold transition hover:bg-white hover:text-black cursor-pointer lowercase md:hidden">
            <a href="#projects">{t('projects.title')}</a>
          </div>
        </div>


        <img
          className='w-28 sm:w-36 mx-auto'
          src="https://github.com/laschisabella.png"
          alt="Profile picture"
        />
        <h1 className=' font-mono text-3xl 2xl:text-5xl mt-12 mb-3'>
          <span className='text-gray-200'>&#60;</span>
          Isabella Laschi
          <span className='text-gray-200'>/&#62;</span>
        </h1>

        <h2 className='text-xl 2xl:text-3xl mb-12 font-bold'>
          {t('profile.jobTitle')}
        </h2>

        <p>
          {t('profile.introduction')}
        </p>

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
            href={resumeFile}
            target="_blank"
            className='bg-black text-white px-8 py-1 ml-10 border-2 border-black font-bold transition hover:bg-white hover:text-black'
          >
            {t('profile.resumeButton')}
          </a>
        </div>
      </div>
    </div>
  )
}