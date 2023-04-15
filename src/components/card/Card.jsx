import { useState } from "react";
import styles from "./card.module.css";
import favourite from "/images/favourite.png"
import favouriteClicked from "/images/favouriteClicked.png";


function Card({onDeleteFromOrder,currentProduct,onAddToOrder,imageUrl,title,price}) {
    const [isAdded, setIsAdded] = useState(false)
    const [isFavourite, setIsFavourite] = useState(false)
    
    function onClickPlus() {
        setIsAdded(!isAdded)
        if(isAdded === false) {onAddToOrder(currentProduct)}
        else {onDeleteFromOrder(currentProduct)}
    }
    
    function onClickFavourite() {
        setIsFavourite(!isFavourite)
    }

    return (
        <li className={styles.card}>
            <img 
            alt="favourite" 
            src={isFavourite === false ? favourite : favouriteClicked} 
            className={styles.favourite} 
            onClick={onClickFavourite}/>
            <img alt="burger" src={imageUrl} />
            <p style={{textAlign:"center"}}>{title}</p>
            <div style={{display:"flex",justifyContent:"space-around",marginTop:"15px"}}>
                <div className={styles.price}>
                    <span>Цена: </span>
                    <b>{price} руб.</b>
                </div>
                <button 
                className={isAdded ? styles.tickMark : styles.plusBtn} 
                onClick={onClickPlus}/>
            </div>
        </li>
    )
}

export default Card