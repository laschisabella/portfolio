import { CaretCircleDoubleRight } from "@phosphor-icons/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';

interface ProjectsI {
  name: string;
  description: string;
  categories: Array<string>;
  urlRepository: string;
  urlProduction: string;
}

export default function Project(){

  const { t, i18n } = useTranslation()

  const projects = [
    {
      name: t('projects.project1.name'),
      description: t('projects.project1.description'),
      categories: [
        'cat 1',
        'cat 2',
        'cat 3',
      ],
      urlRepository: 'https://www.google.com',
      urlProduction: 'name1',
    },
    {
      name: t('projects.project2.name'),
      description: t('projects.project2.description'),
      categories: [
        'cat 1',
        'cat 2',
      ],
      urlRepository: 'name1',
      urlProduction: 'name1',
    },
    {
      name: t('projects.project3.name'),
      description: t('projects.project3.description'),
      categories: [
        'cat 1',
        'cat 2',
        'cat 3',
        'cat 4',
      ],
      urlRepository: 'name1',
      urlProduction: 'name1',
    },
  ]

  return (
    <div className="flex flex-col gap-10 p-16 mb-16 bg-purple-700 rounded-md">
      <p className="text-purple-300">{t('projects.intro')}</p>

      <Accordion 
        borderColor="#8b7591"
      >
        { projects.map(project => (
          <AccordionItem>
            <h2>
              <AccordionButton >
                <Box as="span" flex='1' textAlign='left'>
                  <h1 className="my-2 text-2xl font-bold text-purple-800 uppercase font-murecho">{project.name}</h1>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul className="flex gap-3 mb-3 -mt-2 text-xs font-bold text-gray-100 uppercase">
                {
                  project.categories?.map(cat => (
                    <li className="px-3 py-1 bg-purple-800 rounded-full">{cat}</li>
                  ))
                }
              </ul>
              <p className="m-0 text-purple-300">{project.description}</p>
              <div className="flex items-center gap-3 my-4 text-sm font-bold text-purple-300 uppercase">
                <a href={project.urlProduction} target="_blank" className="flex items-center gap-1 transition hover:text-black">
                  <CaretCircleDoubleRight size={20} className="text-purple-900" weight="bold"/>
                  <p>production</p>
                </a>
                <a href={project.urlRepository} target="_blank" className="flex items-center gap-1 transition hover:text-black">
                  <CaretCircleDoubleRight size={20} className="text-purple-900" weight="bold"/>
                  <p>repository</p>
                </a>
              </div>
            </AccordionPanel>
            </AccordionItem>
          )) }
      </Accordion>
    </div>
  )
}