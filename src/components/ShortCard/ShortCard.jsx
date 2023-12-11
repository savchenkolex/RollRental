import css from "./ShortCard.module.css";
import { ReactComponent as HeartIco } from "../../image/normal.svg";
import { ReactComponent as HeartActiv } from "../../image/active.svg";
import { useState } from "react";

export default function ShortCard({ car }) {

  const [favorites, setFavorites ] = useState(false);

  const handlerHeartClick = () => {
    
    setFavorites(prev => !prev);
  };

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

 
  return (
    <>
      <li className={css.cardItem}>
        <div className={css.imageBox}>
          <img src={img} width={274} height={268} alt={make} />
          {favorites ? (
            <HeartActiv className={css.heartIco} onClick={handlerHeartClick} />
          ) : (
            <HeartIco className={css.heartIco} onClick={handlerHeartClick} />
          )}
        </div>
        <div className={css.cardDescription}>
          <p className={css.cardTitle}>
            {make} <span>{model}</span>, {year}
          </p>
          <p>{rentalPrice}</p>
        </div>
        <div className={css.tagsBox}>
          <div className={css.tagsLine}>
            <p>{address.split(",")[1]}</p>
            <p>{address.split(",")[2]}</p>
            <p>{rentalCompany}</p>
          </div>
          <div className={css.tagsLine}>
            <p>{type}</p>
            <p>{model}</p>
            <p>{mileage}</p>
            <p>{functionalities[0].substring(0, 18)}</p>
          </div>
        </div>
        <button type="button" className={css.LearnMoreBtn}>
          Learn More
        </button>
      </li>
    </>
  );
}
