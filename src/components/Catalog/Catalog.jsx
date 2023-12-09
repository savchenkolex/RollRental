import Filter from '../Filter/Filter';
import ShortCard from '../ShortCard/ShortCard';
import css from './Catalog.module.css';

export default function Catalog () {

    return(<>
        <div className={CSS.sectionCatalog}>
            <div className="container">
                <Filter />
                <ShortCard /> 
                <button>Load more</button>
            </div>
        </div>
    </>)
}