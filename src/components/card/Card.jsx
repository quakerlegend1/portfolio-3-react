import { useState } from "react";
import styles from "./card.module.css";
import favourite from "/images/favourite.png"


function Card(props) {
    const [isAdded, setIsAdded] = useState(false)
    function OnClickPlus() {
        setIsAdded(!isAdded)
    }
    return (
        <li className={styles.card}>
            <img alt="favourite" src={favourite} className={styles.favourite}/>
            <img alt="burger" src={props.imageUrl} />
            <p style={{textAlign:"center"}}>{props.title}</p>
            <div style={{display:"flex",justifyContent:"space-around",marginTop:"15px"}}>
                <div className={styles.price}>
                    <span>Цена: </span>
                    <b>от {props.price} руб.</b>
                </div>
                <button className={isAdded ? styles.tickMark : styles.plusBtn} onClick={OnClickPlus}/>
            </div>
        </li>
    )
}

export default Card