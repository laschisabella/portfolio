export default function Project() {
  return (
    <div className='w-full md:w-3/4 2xl:w-2/3 max-w-2xl bg-black text-gray-200 border-4 border-white outline outline-8 outline-black mb-8 p-8 flex gap-12 font-roboto'>
      <div className='w-3/4'>
        <h2 className='text-lg font-bold mb-3'>
          Lorem Ipsum
        </h2>
        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div className='w-1/4 flex flex-col justify-center content-center font-bold gap-2 text-center mt-9'>
        <a
          className=' bg-white text-black p-2 transition hover:bg-gray-400 hover:text-white'
          href=""
        >
          lorem
        </a>
        <a
          className='border-2 border-white p-1 transition hover:border-gray-300 hover:text-gray-300'
          href=""
        >
          lorem
        </a>
      </div>
    </div>
  )
}