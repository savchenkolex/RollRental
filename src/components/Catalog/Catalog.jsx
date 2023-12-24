import { useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import ShortCard from "../ShortCard/ShortCard";
import css from "./Catalog.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCarsWithPagination } from "../../redux/catalog/operations";
import { onNextPage } from "../../redux/catalog/catalogSlice";
import {
  selectCars,
  selectIsLoading,
  selectPage,
} from "../../redux/selectors";

export default function Catalog() {
  const [maxPrice, setMaxPrice] = useState(100);

  const dispatch = useDispatch();

  const carsData = useSelector(selectCars);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);

    
  const handleLoadMoreBtn = () => {
    console.log("loadMore");
    dispatch(onNextPage());
    console.log("page: ", page);
    dispatch(getCarsWithPagination(page + 1));
  };

  useEffect(()=>{
    const allPrice = carsData.map((car)=>{
      // console.log(car);
      return Number(car.rentalPrice.replace('$',''));
    });

    setMaxPrice(Math.max(...allPrice));

  }, [carsData])

  useEffect(() => {
    dispatch(getCarsWithPagination(page));
    
  
  }, [page, dispatch]);

  return (
    <>
      <div className={css.sectionCatalog}>
        <div className="container">
          <Filter maxPrice={maxPrice} />
          <ul className={css.cardListArea}>
            {carsData ? (
              carsData.map((car) => {
                return <ShortCard key={car.id} car={car} />;
              })
            ) : (
              <p>Cars not found. Nothing to do.</p>
            )}
          </ul>
          <div className={css.loadMoreBtnBox}>
            {isLoading ? 
                <p>Loading...</p> 
                :
                <button className={css.loadMoreBtn} onClick={handleLoadMoreBtn}>
                      Load more
                </button>}
          </div>
        </div>
      </div>
    </>
  );
}
