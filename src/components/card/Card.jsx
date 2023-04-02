import styles from "./card.module.css";
import favourite from "../../images/favourite.png"
import burg from "../../images/1_fresh_muffin.png"

function Card() {
    return (
        <li className={styles.card}>
            <img alt="favourite" src={favourite} className={styles.favourite}/>
            <img alt="burger" src={burg}/>
            <p style={{textAlign:"center"}}>Сырный Фреш Маффин</p>
            <div style={{display:"flex",justifyContent:"space-around",marginTop:"15px"}}>
                <div className={styles.price}>
                    <span>Цена: </span>
                    <b>от 189 руб.</b>
                </div>
                <button className={styles.plusBtn}/>
            </div>
        </li>
    )
}

export default Card