import { StringMap } from 'i18next'
import { useTranslation } from 'react-i18next'

interface ProjectProps {
  title: any,
  description: any,
  pubLink: any,
  repoLink: any,
  repoButton: any,
  pubButton: any,
}

export default function Project({ title, description, pubLink, repoLink, repoButton, pubButton }: ProjectProps) {

  const { t } = useTranslation()

  return (
    <div className='w-full  2xl:w-full max-w-2xl bg-black text-gray-200 border-4 border-white outline outline-8 outline-black mb-8 p-8 flex flex-col md:flex-row gap-3 md:gap-12 font-roboto'>
      <div className='w-full md:w-3/4'>
        <h2 className='text-lg font-bold mb-3'>
          {title}
        </h2>
        <p className='text-sm'>
          {description}
        </p>
      </div>
      <div className='min-w-min w-full md:w-1/4 flex flex-col justify-center content-center font-bold gap-2 text-center mt-9'>
        <a
          className=' bg-white text-black p-1 transition hover:bg-gray-400 hover:text-white'
          href={pubLink}
        >
          {pubButton}
        </a>
        <a
          className='border-2 border-white p-1 transition hover:border-gray-300 hover:text-gray-300'
          href={repoLink}
        >
          {repoButton}
        </a>
      </div>
    </div>
  )
}