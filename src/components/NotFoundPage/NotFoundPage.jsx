import css from "./NotFoundPage.module.css";
import { Link, Navigate } from "react-router-dom";

export default function NotFoundPage () {
    return (<>
        <Navigate to="/" replace={true} />
        <div className={css.section404}>
            <div className={`${css.notFoundBox} container`}>
                    <p>Wow-wow! Wrong way! Go back.</p>
                    <div className={css.pulsarBox}>
                    <Link to="catalog" className={css.pulsar}>Go!</Link>
                    </div>
                
            </div>
        </div>
        </>)
}