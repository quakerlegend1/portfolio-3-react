import styles from "./home.module.css";
import Card from "../../components/card/Card";

export default function Home({dataProducts,deleteFromOrder,addToOrder,addToFavourites,deleteFromFavourites}) {
    return (
        <>
            <div className={styles.search}>
              <h2>Все товары</h2>
              <input type="text" placeholder="Поиск..."/>
            </div>
            <section>
              <ul className={styles.cardsContainer}>
                {dataProducts.map((card)=>
                {return <Card 
                onDeleteFromOrder={deleteFromOrder}
                onAddToOrder={addToOrder}
                onAddToFavourites={addToFavourites}
                onDeleteFromFavourites={deleteFromFavourites}
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