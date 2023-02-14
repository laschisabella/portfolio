import Project from './Project';
import { useTranslation } from 'react-i18next'

export default function ProjectsContainer() {

  const { t, i18n } = useTranslation()

  return (
    <div className='w-full bg-slate-200'>
      <h1 className='font-mono text-3xl p-12  2xl:text-5xl 2xl:p-16'>
        <span className='text-white'>&#60;</span>
        {t('projects.title')}
        <span className='text-white'>/&#62;</span>
      </h1>

      <div className='mx-auto md:-ml-12 p-4'>
        <Project
          title={t('project1.title')}
          description={t('project1.description')}
          pubLink={t('project1.pubLink')}
          repoLink={t('project1.repoLink')}
          repoButton={t('projects.repoButton')}
          pubButton={t('projects.publishedButton')}
        />
        <Project
          title={t('project2.title')}
          description={t('project2.description')}
          pubLink={t('project2.pubLink')}
          repoLink={t('project2.repoLink')}
          repoButton={t('projects.repoButton')}
          pubButton={t('projects.publishedButton')}
        />
        <Project
          title={t('project3.title')}
          description={t('project3.description')}
          pubLink={t('project3.pubLink')}
          repoLink={t('project3.repoLink')}
          repoButton={t('projects.repoButton')}
          pubButton={t('projects.publishedButton')}
        />

      </div>
    </div>
  )
}