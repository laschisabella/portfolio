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
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
      ],
    },
    {
      name: t('skills.skill2.name'),
      description: t('skills.skill2.description'),
      categories: [
        '/icons/typescript.png',
        '/icons/express.png',
        '/icons/fastify.png',
        '/icons/prisma.png',
        '/icons/jest.png',
      ],
    },
  ]

  return (
    <div className="flex flex-col p-16 mb-16 text-black bg-yellow-200 rounded-md">
      <p>{t('skills.intro')}</p>
      <br />
      <Accordion 
        borderColor="#b1a358"
        defaultIndex={[0]}
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
                      <li className="w-14">
                        <img src={cat} />
                      </li>
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