import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from "../../Redux/actions";
import { useState, useEffect } from "react";
import style from './Card.module.css'

const Card = ({ id, name, status, gender, species, origin, image, onClose }) => {
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites);

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? dispatch(removeFav(id)) : dispatch(addFav({ id, name, status, gender, species, origin, image, onClose }))
      setIsFav(!isFav)
   };


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={style.container} >
         {
            isFav ? (<button onClick={handleFavorite}>❤️</button>)
               : (<button onClick={handleFavorite}>🤍</button>)
         }

         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>Nombre: {name}</h2>
         </Link>

         <h2 >Especie: {species}</h2>
         <h2>Status: {status}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image} alt={name} />
      </div>
   );
};

export default Card;