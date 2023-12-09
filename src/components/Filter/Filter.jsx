import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./Filter.module.css";

export default function Filter (props) {
    return (<>
        <Formik
        
        >


            <Form>
                <label htmlFor="car_brand">
                    <p>Car brand</p>
                    <Field as="select" name="car_brand" >
                        <option value="">Enter the text</option>
                        <option value="bmw">bmw</option>
                        <option value="lim">lim</option>
                        <option value="car">car</option>
                    </Field>
                </label>
                <ErrorMessage name="car_brand" />
            </Form>


        </Formik>
    </>)
}