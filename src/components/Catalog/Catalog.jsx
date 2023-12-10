import { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import ShortCard from '../ShortCard/ShortCard';
import css from './Catalog.module.css';
import axios from 'axios';

export default function Catalog () {

    const [pageNum, setPageNum] = useState(1);
    const [carsData, setCarsData] = useState([]);

    const handleLoadMoreBtn = () => {
        setPageNum(prev => prev + 1 );
    }

    useEffect(()=>{
        const url = new URL(`https://65750e78b2fbb8f6509ce075.mockapi.io/api/v1/Advert`);
        url.searchParams.append('page', pageNum);
        url.searchParams.append('limit', 12);
        // url.searchParams.append('id', '9582');
        // // url.searchParams.append('id', '9590');
        // console.log(url);    
        axios.get(url)
            .then(res => {
                console.log(res);
                setCarsData(prev => {return [...prev, ...res.data]});
            })
            .catch(error => {
                console.error(error);
            })
    }, [pageNum])

    return(<>
        <div className={css.sectionCatalog}>
            <div className="container">
                <Filter />
                <ul className={css.cardListArea}>
                    {carsData.length > 0 ? carsData.map((car) => {
                       return <ShortCard car={car} />     
                    }): <p>Cars not found. Nothing to do.</p> } 
                     
                </ul>
                <div className={css.loadMoreBtnBox}>
                    <button className={css.loadMoreBtn} onClick={handleLoadMoreBtn}>Load more</button>
                </div>
            </div>
        </div>
    </>)
}