import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./Filter.module.css";

export default function Filter (props) {
    return (<>
        <Formik
          initialValues={
                {car_brand: "",
                price: "",
                car_milieage_from: "",
                car_milieage_to: ""
                }
            }

        onSubmit = {(values, actions) => {
            console.dir(values);
            console.dir(actions);
            }

        }
        >
            <Form className={css.filterForm}>
                <label htmlFor="car_brand" >
                    <p>Car brand</p>
                    <Field as="select" name="car_brand" className={css.field} >
                        <option className={css.optionItem} value="">Enter the text</option>
                        <option value="bmw">bmw</option>
                        <option value="lim">lim</option>
                        <option value="car">car</option>
                    </Field>
                    <ErrorMessage name="car_brand" />
                </label>
                <label htmlFor="price">
                    <p>Price/1 hour</p>
                    <Field as="select" name="price" className={css.field}>
                        <option value="">To $</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                    </Field>
                </label>
                <label>
                    <p>Car milieage/km</p>
                    <Field type="text" name="car_milieage_from" placeholder="From" className={`${css.field} ${css.fieldFrom}`} />
                    <Field type="text" name="car_milieage_to" placeholder="To" className={`${css.field} ${css.fieldTo}`} />
                </label>
                <button className={css.searchBtn} type="submit">Search</button>
            </Form>


        </Formik>
    </>)
}