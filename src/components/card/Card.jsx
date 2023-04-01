import styles from "./card.module.css";
import favourite from "../../images/favourite.png"

function Card() {
    return (
        <li className={styles.card}>
            <img alt="favourite" src={favourite}/>
        </li>
    )
}

export default Card