import { CaretDoubleRight } from "@phosphor-icons/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { t } from "i18next";

export default function Project(){

  const projects = [
    {
      name: t('projects.project1.name'),
      description: t('projects.project1.description'),
      urlRepository: 'https://github.com/laschisabella/tech-blog',
      urlProduction: 'https://tech-blog-laschisabella.vercel.app/',
      tech: [
        'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white',
        'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
        'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
      ],
    },
    {
      name: t('projects.project2.name'),
      description: t('projects.project2.description'),
      urlRepository: 'https://github.com/laschisabella/nodejs-fundamentals/',
      tech: [
        'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white'
      ],
    },
  ]

  return (
    <div className="flex flex-col p-10 bg-yellow-200 rounded-md gap-7">
      <div className="mb-3">
        <h1 className="mb-3 text-2xl font-murecho">{t('projects.title')}</h1>
        <p className="">{t('projects.intro')}</p>
      </div>
      <Accordion borderColor="#b1a358" >
        {
          projects.map(project => (
          <AccordionItem>
            <AccordionButton className="flex justify-between">
              <div className="flex flex-col items-center justify-between w-full mr-5 sm:flex-row">
                <h1 className="py-3 text-xl text-black font-murecho">{project.name}</h1>
                {/* tech */}
                <div className="flex flex-wrap justify-center gap-1 my-1">
                  {
                    project.tech.map(image => (
                      <img 
                        src={image}
                        className="h-6 rounded-md"
                      />
                    ))
                  }
                </div>
              </div>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel className="flex flex-col">
              {/* description */}
              <p>{t('projects.project1.description')}</p>

              {/* buttons */}
              <div className="flex gap-3 my-3 w-min">
              {
                  project.urlProduction && (
                    <a href={project.urlProduction} role="button" target="_blank" >
                      <div className="flex gap-1 text-sm uppercase transition hover:text-purple-900 font-murecho">
                        <CaretDoubleRight weight="bold" size={20} className="text-purple-500 "/>
                        <p>{t('projects.buttons.production')}</p>
                      </div>
                    </a>
                  )
                }
                <a href={project.urlRepository} role="button" target="_blank">
                  <div className="flex gap-1 text-sm uppercase transition hover:text-purple-900 font-murecho">
                    <CaretDoubleRight weight="bold" size={20} className="text-purple-500 "/> 
                    <p className="mb-0.5">{t('projects.buttons.repository')}</p>
                  </div>
                </a>
                
              </div>

              
            </AccordionPanel>
          </AccordionItem>
          ))
        }
      </Accordion>
    </div>
  )
}