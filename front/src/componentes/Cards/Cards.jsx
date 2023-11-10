import Card from '../Card/Card';
import styles from './Cards.module.css';
import React, { useState } from 'react';

const Cards = ({characters, onClose})=> {
   const [visibleCards, setVisibleCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const showNextCard = () => {
   if (currentIndex < characters.length) {
     const character = characters[currentIndex];
     const updatedVisibleCards = [...visibleCards, character];
     setVisibleCards(updatedVisibleCards);
     setCurrentIndex(currentIndex + 1);
   }
 };
 

 return (
   <div className={styles.cardsContainer}>
     {characters.map(({ id, name, status, species, gender, origin, image }) => (
       <Card
         key={id}
         id={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         image={image}
         origin={origin.name}
         onClose={onClose}
       />
     ))}
   </div>
 );
};


export default Cards;
