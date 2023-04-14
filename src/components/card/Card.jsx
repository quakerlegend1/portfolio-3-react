import { useEffect, useState } from "react";
import styles from "./card.module.css";
import favourite from "/images/favourite.png"


function Card({onDeleteFromOrder,currentProduct,onAddToOrder,imageUrl,title,price}) {
    const [isAdded, setIsAdded] = useState(false)
    
    function onClickPlus() {
        
        setIsAdded(!isAdded)
        if(isAdded === false) {onAddToOrder(currentProduct)}
        else {onDeleteFromOrder(currentProduct)}
    }
    
    

    return (
        <li className={styles.card}>
            <img alt="favourite" src={favourite} className={styles.favourite}/>
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