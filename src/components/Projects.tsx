import { CaretCircleDoubleRight } from "@phosphor-icons/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { t } from "i18next";

export default function Project(){

  const projects = [
    {
      name: t('projects.project1.name'),
      description: t('projects.project1.description'),
      urlRepository: 'https://github.com/laschisabella/tech-blog',
      urlProduction: 'https://tech-blog-laschisabella.vercel.app/',
    },
    {
      name: t('projects.project2.name'),
      description: t('projects.project2.description'),
      urlRepository: 'https://github.com/laschisabella/nodejs-fundamentals/',
    },
  ]

  return (
    <div className="flex flex-col gap-10 p-16 mb-16 bg-yellow-200 rounded-md">
      <p className="text-center">{t('projects.intro')}</p>
      



      <Accordion borderColor="#b1a358" defaultIndex={[0]}>


        {/* laschisa's tech blog */}
        <AccordionItem>
            <AccordionButton className="flex justify-between">
              <h1 className="text-2xl text-purple-800">
                {t('projects.project1.name')}
              </h1>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel>
              <p>{t('projects.project1.description')}</p>
              <a href="" target="_blank" className="flex items-center gap-1 transition hover:text-black">
                  <CaretCircleDoubleRight size={20} className="text-purple-900" weight="bold"/>
                  <p>{t('projects.buttons.repository')}</p>
                </a>


                <div className="flex flex-wrap justify-center gap-5 -my-10">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                    className="w-20"
                  />
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                    className="w-40 -ml-2"
                  />
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    className="w-14"
                  />
                  <img 
                    src="/mongo.png"
                    className="object-cover h-5 my-auto -ml-7"
                  />
                </div>
          </AccordionPanel>
        </AccordionItem>

        {/* node fundamentals */}
        <AccordionItem>
            <AccordionButton className="flex justify-between">
              <h1 className="my-2 text-2xl font-bold text-purple-800 uppercase font-murecho">
                {t('skills.skill2.name')}
              </h1>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel>
              <p>{t('skills.skill1.description')}</p>
              <div className="flex flex-wrap justify-center gap-5 -my-5">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                  className="mb-2 w-28"
                />               
              </div>
          </AccordionPanel>
        </AccordionItem>


        {/* second node project */}

        <AccordionItem>
            <AccordionButton className="flex justify-between">
              <h1 className="my-2 text-2xl font-bold text-purple-800 uppercase font-murecho">
                {t('skills.skill2.name')}
              </h1>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel>
              <p>{t('skills.skill1.description')}</p>
              <div className="flex flex-wrap justify-center gap-5 -my-5">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  className="w-8"
                />
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                    className="mb-2 w-28"
                  />
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg"
                    className="w-28"
                  />
                </div>
          </AccordionPanel>
        </AccordionItem>

        
      </Accordion>
    </div>
  )
}