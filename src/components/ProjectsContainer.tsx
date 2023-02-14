import Project from './Project';

export default function ProjectsContainer() {
  return (
    <div className='w-full bg-slate-200'>
      <h1 className='font-mono text-3xl p-12  2xl:text-5xl 2xl:p-16'>
        <span className='text-white'>&#60;</span>
        Projects
        <span className='text-white'>/&#62;</span>
      </h1>

      <div className='mx-auto md:-ml-12 p-4'>
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}