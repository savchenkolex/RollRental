import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home (props) {

    return (<>
        <div className={css.sectionHome}>
            <div className='container'>
                <div className={css.homePageInfo}>
                    <h1>Any cars for your money!</h1>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis eveniet quasi, ullam tempore mollitia magnam ratione iure corrupti veritatis alias placeat maiores rerum tempora nisi fugit aut tenetur aperiam eius. Voluptate earum quod facere est inventore in excepturi tenetur error, ab culpa corrupti esse eum accusantium consectetur nulla totam dolorum dicta sit laudantium repudiandae laboriosam ullam labore? Dignissimos excepturi ratione reprehenderit id quasi blanditiis ducimus aut sunt, vel quisquam perferendis modi, ex earum fuga! Accusantium rerum tempora aliquam perspiciatis quaerat, voluptatibus eum ex placeat pariatur iusto cupiditate nihil amet fugit laborum, repudiandae similique error, blanditiis fuga! Cumque incidunt nemo praesentium quod et repudiandae sapiente consequatur rem, dicta quia. Facilis, vero? Facilis voluptatibus molestias ab alias vero, non nesciunt. Autem magni quasi tempora eum libero sed in praesentium voluptates aut dolor. Eaque quae, vero similique tenetur expedita sapiente soluta quas! Possimus delectus nulla qui blanditiis voluptates debitis ut id, ipsam numquam earum odit, rem a eveniet reiciendis. Labore rem magni ea suscipit! Incidunt a esse non dolorem saepe consequatur est illo, possimus rerum amet accusantium fuga ut quae perferendis. Iste et perferendis delectus aspernatur qui velit incidunt fugiat natus soluta perspiciatis officiis nisi facere ullam reprehenderit pariatur quidem, voluptas quae minus laborum? Totam maiores eaque nulla tempore corporis suscipit delectus, veritatis numquam sed illum nemo aliquam pariatur provident quos commodi quo dolores voluptates?</p>
                    </div>
                    <div className={css.pulsarBox}>
                    <Link to="catalog" className={css.pulsar}>Go!</Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}