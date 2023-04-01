import styles from "./card.module.css";

function Card() {
    return (
        <li className={styles.card}>
            <img alt="favourite" src="src\images\favourite.png"/>
        </li>
    )
}

export default Card