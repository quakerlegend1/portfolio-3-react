import Card from "../../components/card/Card";
import styles from "./favourite.module.css";

export default function Favourite({favouriteItems}) {
    return (
        <>
            <h2>Мои закладки</h2>
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