import { t } from "i18next";


export default function Skills(){
  return (
    <div className="flex flex-col p-16 mb-16 text-black bg-yellow-200 rounded-md">
      <p>{t('projects.intro')}</p>
      <br />
      <h1 className="text-2xl text-yellow-900 uppercase font-murecho">front-end</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam, perspiciatis distinctio unde ea recusandae quae fuga iure. Illo temporibus, atque dolore enim esse odio aut ipsam necessitatibus exercitationem possimus.</p>
      
    </div>
  )
}