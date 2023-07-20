import { CaretDoubleRight } from "@phosphor-icons/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { DefaultTFuncReturn, t } from "i18next";

interface ProjectI {
  name: DefaultTFuncReturn
  description: {
    desc1: DefaultTFuncReturn,
    desc2: DefaultTFuncReturn,
    ul: [DefaultTFuncReturn, DefaultTFuncReturn][]
  }
  urlRepository: string
  urlProduction?: string
  tech: string[]
}

export default function Project(){

  const projects:ProjectI[] = [
    {
      name: t('projects.project1.name'),
      description: {
        desc1: t('projects.project1.description1'),
        desc2: t('projects.project1.description2'),
        ul: [
          [t('projects.project1.ul.li1.title'), t('projects.project1.ul.li1.description')],
          [t('projects.project1.ul.li2.title'), t('projects.project1.ul.li2.description')],
          [t('projects.project1.ul.li3.title'), t('projects.project1.ul.li3.description')],
          [t('projects.project1.ul.li4.title'), t('projects.project1.ul.li4.description')],
        ]
      },
      urlRepository: 'https://github.com/laschisabella/tech-blog',
      urlProduction: 'https://tech-blog-laschisabella.vercel.app/',
      tech: [
        'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white',
        'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
        'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
      ],
    },
    // {
    //   name: t('projects.project2.name'),
    //   description: {
    //     desc1: t('projects.project2.description1'),
    //     desc2: t('projects.project2.description2'),
    //     ul: [
    //       [t('projects.project2.ul.li1.title'), t('projects.project2.ul.li1.description')],
    //       [t('projects.project2.ul.li2.title'), t('projects.project2.ul.li2.description')],
    //       [t('projects.project2.ul.li3.title'), t('projects.project2.ul.li3.description')],
    //       [t('projects.project2.ul.li4.title'), t('projects.project2.ul.li4.description')],
    //     ]
    //   },
    //   urlRepository: 'https://github.com/laschisabella/nodejs-fundamentals/',
    //   tech: [
    //     'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white'
    //   ],
    // },
  ]

  return (
    <div className="flex flex-col w-full p-8 bg-purple-600 rounded-md md:p-14 gap-7">
      <div className="">
        <h1 className="text-3xl text-purple-800 font-murecho">
          <span className="text-purple-700">&lt;</span>
          <span className="px-1">{t('projects.title')}</span>
          <span className="text-purple-700">/&gt;</span>
        </h1>
      </div>
      <Accordion borderColor="transparent" className="">
        {
          projects.map(project => (
          <AccordionItem className="my-1">
            <AccordionButton className="flex justify-between gap-2 bg-purple-900 rounded-lg">
              <div className="flex items-center justify-between w-full gap-12">
                <h1 className="py-3 pl-2 text-gray-100 text-md font-murecho hover:bg-yellow-700">{project.name}</h1>
                {/* tech */}
                <div className="flex flex-wrap justify-center gap-1">
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
              <AccordionIcon className="text-gray-100"/>
            </AccordionButton>
            <AccordionPanel className="flex flex-col mt-1 text-gray-100 bg-purple-700 rounded-lg">
              {/* description */}
              <div className="pr-5 m-5 overflow-y-auto h-80">
                <p>{project.description.desc1}</p>
                {
                  project.description.ul && (
                    <ul className="list-none">
                      {
                        project.description.ul.map(li => (
                          <li className="py-3">
                            <strong className="font-black text-purple-800">{li[0]}: </strong>
                            <span>{li[1]}</span>
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
                {
                  project.description.desc2 && (
                    <p>{project.description.desc2}</p>
                  )
                }
              </div>
              {/* buttons */}
              <div className="flex gap-3 mx-auto justify-content w-min">
              {
                project.urlProduction && (
                  <a href={project.urlProduction} role="button" target="_blank" >
                    <div className="flex gap-1 text-sm text-black uppercase transition hover:text-purple-100 font-murecho">
                      <CaretDoubleRight weight="bold" size={20} className="text-purple-600"/>
                      <p>{t('projects.buttons.production')}</p>
                    </div>
                  </a>
                )
              }
                <a href={project.urlRepository} role="button" target="_blank">
                  <div className="flex gap-1 text-sm text-black uppercase transition hover:text-purple-100 font-murecho">
                    <CaretDoubleRight weight="bold" size={20} className="text-purple-600 "/> 
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