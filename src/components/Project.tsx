import { changeLanguage } from "i18next"

export default function Project(){

  function teste(){
    changeLanguage('pt')
  }


  return (
    <div className="">
      <h1 className="text-2xl font-light text-gray-100">Project Title</h1>
      <div className="flex gap-3 my-2">
        <p className="inline-block px-3 py-0.5 bg-black rounded-2xl text-gray-100 text-sm font-bold">category</p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quisquam error optio unde ex assumenda reprehenderit consectetur repudiandae ab delectus repellendus, eum tenetur adipisci nostrum cum laboriosam eveniet dolorum quasi?</p>
      <div>
        <div onClick={teste}>button 1</div>
        <div>button 2</div>
      </div>
    </div>
  )
}