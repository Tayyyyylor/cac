/* eslint-disable react/prop-types */
import "./Cards.css"
import { useState } from "react";
import Modal from "../modal/Modal";

function Cards({card}) {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

    const closeModal = () => {
    setShowModal(false);
  };

  const modalsData = [
    {
      title: 'Elisa',
      text:`Je suis dans l'arrière-pays niçois, en juin 2022. Nous sommes dimanche, la température est clémente et le lieu où je me trouve est magnifique. Ma fille et mon compagnon sont avec moi. Je suis dans ce lieu pour une raison précise, importante à mes yeux. Les origines de ma présence ici-même remontent à 2010. A l'époque, j'ai été prise malgré moi pour un rôle de (excusez du peu) ... de sirène, dans un court-métrage ambitieux, avec une équipe technique talentueuse. Je précise que je ne suis pas actrice de métier. Le réalisateur m'attribue un coach en gestuelle parce que le rôle le réclame. Je fais alors la connaissance de Francis, une personne dont les traits expriment une forme de calme et sa voix transmet une douceur. Le feeling est immédiat malgré que je sois intimidée. Nous faisons rapidement des exercices liés au comportement animal, notamment liés aux Grands Singes pour qui Francis a un lien important. C'est d'ailleurs l'un de nos points commun : Les Grands Singes

      Au fil de nos discussions passionnées sur le cinéma, les animaux, Francis me parle d'un certain Maurice, qu'il a rencontré. Je comprends qu'un lien important s'est noué entre eux. Maurice est photographe et est lié aux nations tribales, notamment aux Sioux-Lakota. Il m'en parle avec une telle passion, conviction que je fais des recherches très rapidement. Entre-temps, le coaching s'est terminé et je suis prête dans mon rôle de sirène. Je me remémore des instants précis où je fais une démonstration des mouvements appris, devant l'équipe du film. Je suis dans mon costume, avec un maquillage en latex et un bas vert pour les effets spéciaux numériques . Ma prestation est appréciée et je suis flattée, surtout que je ne suis pas de ce métier. Le tournage se passe très bien, les images sont belles. La communication avec Francis s'est mise en pause car la vie suit son cours. 
      
      Je suis donc en juin 2022, une personne s'approche de moi et semble me reconnaître. Il me reconnaît, c'est Francis ! L' événement pour lequel je suis venue précisément un dimanche, dans lequel se regroupe beaucoup de gens, Francis a pu me reconnaître parmi toutes ces personnes. 12 ans séparent notre rencontre et j'apprends, réalise que la probabilité de nous revoir, ce jour précis, était tellement infime que cela est fou encore maintenant. 
      
      A quelques mètres est assis Maurice, ce même Maurice dont Francis m'a parlé. C'est lui qui dirige l'événement. D'ailleurs, il sourit, rit quant à notre histoire commune. Je suis moi-même sous le coup de l'émotion. La boucle est bouclée ! `,
    },
    {
      title: 'Elisa',
      text:`Je suis dans l'arrière-pays niçois, en juin 2022. Nous sommes dimanche, la température est clémente et le lieu où je me trouve est magnifique. Ma fille et mon compagnon sont avec moi. Je suis dans ce lieu pour une raison précise, importante à mes yeux. Les origines de ma présence ici-même remontent à 2010. A l'époque, j'ai été prise malgré moi pour un rôle de (excusez du peu) ... de sirène, dans un court-métrage ambitieux, avec une équipe technique talentueuse. Je précise que je ne suis pas actrice de métier. Le réalisateur m'attribue un coach en gestuelle parce que le rôle le réclame. Je fais alors la connaissance de Francis, une personne dont les traits expriment une forme de calme et sa voix transmet une douceur. Le feeling est immédiat malgré que je sois intimidée. Nous faisons rapidement des exercices liés au comportement animal, notamment liés aux Grands Singes pour qui Francis a un lien important. C'est d'ailleurs l'un de nos points commun : Les Grands Singes

      Au fil de nos discussions passionnées sur le cinéma, les animaux, Francis me parle d'un certain Maurice, qu'il a rencontré. Je comprends qu'un lien important s'est noué entre eux. Maurice est photographe et est lié aux nations tribales, notamment aux Sioux-Lakota. Il m'en parle avec une telle passion, conviction que je fais des recherches très rapidement. Entre-temps, le coaching s'est terminé et je suis prête dans mon rôle de sirène. Je me remémore des instants précis où je fais une démonstration des mouvements appris, devant l'équipe du film. Je suis dans mon costume, avec un maquillage en latex et un bas vert pour les effets spéciaux numériques . Ma prestation est appréciée et je suis flattée, surtout que je ne suis pas de ce métier. Le tournage se passe très bien, les images sont belles. La communication avec Francis s'est mise en pause car la vie suit son cours. 
      
      Je suis donc en juin 2022, une personne s'approche de moi et semble me reconnaître. Il me reconnaît, c'est Francis ! L' événement pour lequel je suis venue précisément un dimanche, dans lequel se regroupe beaucoup de gens, Francis a pu me reconnaître parmi toutes ces personnes. 12 ans séparent notre rencontre et j'apprends, réalise que la probabilité de nous revoir, ce jour précis, était tellement infime que cela est fou encore maintenant. 
      
      A quelques mètres est assis Maurice, ce même Maurice dont Francis m'a parlé. C'est lui qui dirige l'événement. D'ailleurs, il sourit, rit quant à notre histoire commune. Je suis moi-même sous le coup de l'émotion. La boucle est bouclée ! `,
    },
    {
      title: 'Elisa',
      text:`Je suis dans l'arrière-pays niçois, en juin 2022. Nous sommes dimanche, la température est clémente et le lieu où je me trouve est magnifique. Ma fille et mon compagnon sont avec moi. Je suis dans ce lieu pour une raison précise, importante à mes yeux. Les origines de ma présence ici-même remontent à 2010. A l'époque, j'ai été prise malgré moi pour un rôle de (excusez du peu) ... de sirène, dans un court-métrage ambitieux, avec une équipe technique talentueuse. Je précise que je ne suis pas actrice de métier. Le réalisateur m'attribue un coach en gestuelle parce que le rôle le réclame. Je fais alors la connaissance de Francis, une personne dont les traits expriment une forme de calme et sa voix transmet une douceur. Le feeling est immédiat malgré que je sois intimidée. Nous faisons rapidement des exercices liés au comportement animal, notamment liés aux Grands Singes pour qui Francis a un lien important. C'est d'ailleurs l'un de nos points commun : Les Grands Singes

      Au fil de nos discussions passionnées sur le cinéma, les animaux, Francis me parle d'un certain Maurice, qu'il a rencontré. Je comprends qu'un lien important s'est noué entre eux. Maurice est photographe et est lié aux nations tribales, notamment aux Sioux-Lakota. Il m'en parle avec une telle passion, conviction que je fais des recherches très rapidement. Entre-temps, le coaching s'est terminé et je suis prête dans mon rôle de sirène. Je me remémore des instants précis où je fais une démonstration des mouvements appris, devant l'équipe du film. Je suis dans mon costume, avec un maquillage en latex et un bas vert pour les effets spéciaux numériques . Ma prestation est appréciée et je suis flattée, surtout que je ne suis pas de ce métier. Le tournage se passe très bien, les images sont belles. La communication avec Francis s'est mise en pause car la vie suit son cours. 
      
      Je suis donc en juin 2022, une personne s'approche de moi et semble me reconnaître. Il me reconnaît, c'est Francis ! L' événement pour lequel je suis venue précisément un dimanche, dans lequel se regroupe beaucoup de gens, Francis a pu me reconnaître parmi toutes ces personnes. 12 ans séparent notre rencontre et j'apprends, réalise que la probabilité de nous revoir, ce jour précis, était tellement infime que cela est fou encore maintenant. 
      
      A quelques mètres est assis Maurice, ce même Maurice dont Francis m'a parlé. C'est lui qui dirige l'événement. D'ailleurs, il sourit, rit quant à notre histoire commune. Je suis moi-même sous le coup de l'émotion. La boucle est bouclée ! `,
    }
  ]

  return (
  
    <div className='cards-container'>
        <h5 className='title-cards'>{card.title}</h5>
        <p className='text-cards'>{card.desc}</p>
      <button className='button-cards' onClick={openModal}>voir plus</button>
         {showModal && modalsData.slice(0, 3).map((modal, index) => (
           <Modal
             onCancel={() => setShowModal(false)}
             closeModal={closeModal}
             modal={modal}
             key={index}
        />
      ))}
      
    </div>
  
  )
}

export default Cards