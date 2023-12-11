import { useEffect } from "react";
import Filter from "../Filter/Filter";
import ShortCard from "../ShortCard/ShortCard";
import css from "./Catalog.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCarsWithPagination } from "../../redux/catalog/operations";
import { onNextPage } from "../../redux/catalog/catalogSlice";
import {
  selectCars,
  selectIsLoading,
  selectFavorites,
  selectPage,
} from "../../redux/selectors";

export default function Catalog() {

  const dispatch = useDispatch();

  const handleLoadMoreBtn = () => {
    dispatch(onNextPage());
    dispatch(getCarsWithPagination(page + 1));
  };

  const carsData = useSelector(selectCars);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCarsWithPagination(page));
  
  }, [page]);

  return (
    <>
      <div className={css.sectionCatalog}>
        <div className="container">
          <Filter />
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
