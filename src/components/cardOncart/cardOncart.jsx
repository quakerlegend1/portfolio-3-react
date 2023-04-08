import React from "react";
import styles from "./cardOncart.module.css";

function CardOncart() {
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <img/>
                <p></p>
                <b>12999</b>
                <img src="public/images/close.png"/>
            </div>
        </div>
    )
}
export default CardOncart;