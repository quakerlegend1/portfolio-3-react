import Card from "../../components/card/Card";
import styles from "./favourite.module.css";
import {Link} from "react-router-dom"

export default function Favourite({favouriteItems}) {
    return (
        <>
            <h2>Мои закладки</h2>
            <Link to="/"><button style={{height: "20px",cursor:"pointer",marginTop:"10px"}}>← Назад</button></Link>
            <section>
              <ul className={styles.cardsContainer}>
                {favouriteItems.map((card)=>
                {return <Card 
                key={card.id} 
                title={card.title} 
                price={card.price} 
                imageUrl={card.imageUrl}
                currentProduct={card}
                />})}
              </ul>
            </section>
        </>
    )
}