import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./Filter.module.css";
import CustomSelect from "./CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen, setModalClose } from "../../redux/modal/modalSlice";
import { getAllCars, getBrands } from "../../redux/catalog/operations";
import { useEffect } from "react";
import {
  selectBrands,
  selectIsModalOpen,
  selectModalData,
} from "../../redux/selectors";

export default function Filter({maxPrice}) {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const isActiv = useSelector(selectIsModalOpen);
  const modalData = useSelector(selectModalData);
  console.log("My modal ", isActiv);
  console.log("my modal data: ", modalData);
  console.log("maxPrice: ", maxPrice);

  const handleClick = () => {
    console.log("click");
    if(isActiv){
        dispatch(setModalClose());
    }else{
        dispatch(setModalOpen("ldkfjsljls"));
    }
    console.log("modal: ", isActiv);
    console.log("data ", modalData);
  };

  function priceOptions(maxNumber) {
    const priceArray = [];
    for(let i = 10; i <= maxNumber; i = i + 10){
      priceArray.push(i);
    }
    return priceArray;
  }

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <>
      <Formik
        initialValues={{
          car_milieage_from: "",
          car_milieage_to: "",
        }}
        onSubmit={(values, actions) => {
          console.dir(values);
          console.dir(actions);
        }}
      >
        <Form className={css.filterForm}>
          <CustomSelect name="brand" label="Car brand" options={brands} />
          <CustomSelect name="price" label="Price/1 hour" options={priceOptions(maxPrice)} />
          <label >
            <p>Car milieage/km</p>
            <Field
              type="text"
              name="car_milieage_from"
              placeholder="From"
              className={`${css.field} ${css.fieldFrom}`}
            />
            <ErrorMessage name="car_milieage_from" />
            <Field
              type="text"
              name="car_milieage_to"
              placeholder="To"
              className={`${css.field} ${css.fieldTo}`}
            />
            <ErrorMessage name="car_milieage_to" />
          </label>
          <button className={css.searchBtn} type="submit" onClick={handleClick}>
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
}
