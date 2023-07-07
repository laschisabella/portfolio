export default function Logo(){
  return (
    <div className="flex flex-col items-center text-white">
      <img src="/logo.png" alt="logo" className="w-1/2 "/>
      <span className="mt-5 mb-1 text-3xl uppercase font-murecho">Isabella Laschi</span>
      <span className="text-xl font-major">full<span className="text-gray-200"> stack </span>developer</span>
    </div> 
  )
}