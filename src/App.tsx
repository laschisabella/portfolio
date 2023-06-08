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
    <div className="flex items-start justify-center min-h-screen bg-gray-900 max-w-screen font-roboto">
      {/* wrapper */}
     <div className="flex w-full max-w-screen-lg gap-10 mx-5 mt-16">
      {/* left */}
      <div className="max-w-xs">
        <div className="flex flex-col items-center text-white">
          <img src="/logo.png" alt="logo" className="w-1/2 "/>
          <span className="mt-5 mb-1 text-3xl uppercase font-murecho">Isabella Laschi</span>
          <span className="text-xl font-major">full<span className="text-gray-200"> stack </span>developer</span>
        </div>
        <About />
      </div>
      {/* right */}
      <div className="w-full">
        <div className="flex gap-2 text-center justify-evenly ">
          <div 
            className="w-full py-1 ml-3 bg-yellow-200 cursor-pointer rounded-t-md"
            onClick={() => setTab('skills')}
          >{t('tabs.tab1')}</div>
          <div 
            className="w-full py-1 mr-3 bg-purple-700 cursor-pointer rounded-t-md"
            onClick={() => setTab('projects')}
          >{t('tabs.tab2')}</div>
        </div>

        { tab == 'skills' && 
          <div className="p-8 mb-16 bg-yellow-200 rounded-md">
            <Skill />
            <Skill />
            <Skill />
          </div>
         }
        { tab == 'projects' && 
          <div className="flex flex-col gap-10 p-12 mb-16 bg-purple-700 rounded-md">
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
