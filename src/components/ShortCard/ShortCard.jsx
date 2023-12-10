import css from "./ShortCard.module.css";

export default function ShortCard () {
    return (<>
        <li className={css.cardItem}>
            <img src="#" width={274} height={268} />
            <div className={css.cardDescription}>
                <p className={css.cardTitle}>Buick</p>
            </div>
            <button type="button" className={css.LearnMoreBtn}>Learn More</button>
        </li>
    </>)
}