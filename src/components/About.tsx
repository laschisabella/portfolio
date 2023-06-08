import { MapPin, At, GithubLogo, LinkedinLogo, CaretCircleDoubleRight} from "@phosphor-icons/react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function About(){

  const { t, i18n } = useTranslation()

  function toggleLang(){
    if (i18next.language == 'pt-BR') {
      i18n.changeLanguage('en')
      
    } else if (i18next.language == 'en') {
      i18n.changeLanguage('pt-BR')
    }
  }

  return(
    <div className="p-8 my-5 text-gray-100 transition bg-gray-500 rounded-md">
      <div className="flex justify-end">
        {/* language */}
        <div className="flex items-center gap-2">
          <p className="text-sm font-bold text-gray-100">PT</p>
          <label className="relative inline-flex items-center">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-transparent dark:peer-focus:ring-transparent rounded-full peer dark:bg-yellow-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-transparent after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-500 cursor-pointer" onClick={toggleLang}></div>
          </label>
          <p className="text-sm font-bold">EN</p>
        </div>
      </div>
      
      <div>
        <h1 className="text-2xl text-black"><span className="font-bold">{t('about.titleFirst')}</span> {t('about.titleSecond')}</h1>
        <p className="font-light">{t('about.description')}</p>
      </div>
      <div className="my-6 ml-1 text-base">
        <span className="flex items-center gap-3"><MapPin size={20} color="#000" weight="fill" /><span>{t('about.location')}</span></span>
        <span className="flex items-center gap-3 transition cursor-pointer hover:text-black"><At size={20} color="#000"/><a href="mailto:laschi.isabella@gmail.com">laschi.isabella@gmail.com</a></span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 text-gray-900">
          <a href="https://github.com/laschisabella" target="_blank"><GithubLogo size={32} weight="fill" className="transition rounded cursor-pointer hover:text-white hover:bg-gray-900"/></a>
          <a href="https://www.linkedin.com/in/isabella-laschi/" target="_blank"><LinkedinLogo size={32} weight="fill" className="transition rounded cursor-pointer hover:text-white hover:bg-gray-900"/></a>
        </div>
        <div className="flex items-center gap-2 px-4 text-sm font-bold text-gray-100 uppercase transition bg-gray-900 rounded-md cursor-pointer hover:bg-gray-700">
          <CaretCircleDoubleRight weight="fill" size={20} />
          <p className="block mt-0.5">{t('about.button')}</p>
        </div>
      </div>
    </div>

  )
}