import { useState, useEffect } from 'react';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useTranslation } from 'react-i18next';

export default function App() {

  const [tab, setTab] = useState('skills');
  const { t, i18n } = useTranslation()

  // detect browser language for first render
  useEffect(() => {
    i18n.changeLanguage(navigator.language)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 max-w-screen font-roboto">
      {/* wrapper */}
     <div className="flex items-center max-w-screen-lg gap-10 m-8">
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
      <div className="w-full h-max">
        <div className="flex gap-2 text-center justify-evenly ">
          <div 
            className="flex items-center justify-center w-full p-2 ml-2 text-sm font-bold text-gray-900 uppercase bg-yellow-200 cursor-pointer rounded-t-md"
            onClick={() => setTab('skills')}
          ><p>{t('tabs.tab1')}</p></div>
          <div 
            className="flex items-center justify-center w-full p-2 mr-2 text-sm font-bold text-purple-300 uppercase bg-purple-700 cursor-pointer rounded-t-md"
            onClick={() => setTab('projects')}
          ><p>{t('tabs.tab2')}</p></div>
        </div>

        { tab == 'skills' && <Skills /> }
        { tab == 'projects' && <Projects /> }
      </div>
     </div>
    </div>
  )
}
