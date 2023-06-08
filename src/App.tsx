import { useState, useEffect } from 'react';
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import { useTranslation } from 'react-i18next';

export default function App() {

  const [tab, setTab] = useState('skills');
  const { t, i18n } = useTranslation()

  // detect browser language for first render
  useEffect(() => {
    i18n.changeLanguage(navigator.language)
  }, [])

  return (
    <div className="bg-gray-900 max-w-screen min-h-screen flex justify-center items-start font-roboto">
      {/* wrapper */}
     <div className="flex gap-10 w-full max-w-screen-lg mt-16 mx-5">
      {/* left */}
      <div className="max-w-xs">
        <div className="text-white flex flex-col items-center">
          <img src="/logo.png" alt="logo" className="w-1/2 "/>
          <span className="font-murecho uppercase text-3xl mt-5 mb-1">Isabella Laschi</span>
          <span className="font-major text-xl">full<span className="text-gray-200"> stack </span>developer</span>
        </div>
        <About />
      </div>
      {/* right */}
      <div className="w-full">
        <div className="flex justify-evenly text-center gap-2 ">
          <div 
            className="bg-yellow-200 w-full ml-3 rounded-t-md py-1 cursor-pointer"
            onClick={() => setTab('skills')}
          >{t('tabs.tab1')}</div>
          <div 
            className="bg-purple-700 w-full mr-3 rounded-t-md py-1 cursor-pointer"
            onClick={() => setTab('projects')}
          >{t('tabs.tab2')}</div>
        </div>

        { tab == 'skills' && 
          <div className="bg-yellow-200 rounded-md p-8 mb-16">
            <Skill />
            <Skill />
            <Skill />
          </div>
         }
        { tab == 'projects' && 
          <div className="bg-purple-700 rounded-md p-12 mb-16 flex flex-col gap-10">
            <Project />
            <Project />
            <Project />
          </div>
         }
      </div>
     </div>
    </div>
  )
}
