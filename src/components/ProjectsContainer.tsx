import Project from './Project';

export default function ProjectsContainer() {
  return (
    <div className='w-4/7 px-20 bg-slate-200 flex flex-col justify-center'>
      <h1 className='font-mono text-6xl mt-10 mb-5'>
        <span className='text-white'>&#60;</span>
        Projects
        <span className='text-white'>/&#62;</span>
      </h1>

      <div className='max-w-2xl -mx-[300px]'>
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}