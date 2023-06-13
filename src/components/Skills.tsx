import { t } from "i18next";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'


export default function Skills(){

  const skills = [
    {
      name: t('skills.skill1.name'),
      description: t('skills.skill1.description'),
      categories: [
        'React.JS',
        'Next.JS',
        'Tailwind CSS',
        'TypeScript',
      ],
    },
    {
      name: t('skills.skill2.name'),
      description: t('skills.skill2.description'),
      categories: [
        'cat 1',
        'cat 2',
        'cat 3',
      ],
    },
    {
      name: t('skills.skill3.name'),
      description: t('skills.skill3.description'),
      categories: [
        'cat 1',
        'cat 2',
        'cat 3',
      ],
    },
  ]

  return (
    <div className="flex flex-col p-16 mb-16 text-black bg-yellow-200 rounded-md">
      <p>{t('projects.intro')}</p>
      <br />
      <Accordion 
        borderColor="#b1a358"
      >
        { skills.map(skill => (
          <AccordionItem>
            <h2>
              <AccordionButton >
                <Box as="span" flex='1' textAlign='left'>
                  <h1 className="my-2 text-2xl font-bold text-purple-800 uppercase font-murecho">{skill.name}</h1>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="">
                <p>{skill.description}</p>
                <ul className="flex justify-center gap-3 mt-5 mb-3 font-bold text-gray-100">
                  {
                    skill.categories?.map(cat => (
                      <li className="px-3 py-1 bg-yellow-900 rounded-full">{cat}</li>
                    ))
                  }
                </ul>
              </div>
            </AccordionPanel>
            </AccordionItem>
          )) }
      </Accordion>
      
    </div>
  )
}