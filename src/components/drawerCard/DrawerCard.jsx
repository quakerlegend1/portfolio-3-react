import React from "react";
import styles from "./drawerCard.module.css";


function DrawerCard(props) {
    return (
            <ul className={styles.cards}>
                <li className={styles.card}>
                    <img alt="cart-item" width="70" height="70" src={props.imageUrl}/>
                    <div className={styles.textDescription}>
                        <p>{props.title}</p>
                        <b>{props.price}</b>
                    </div>
                    <img src="/images/close.png" alt="closeBtn" width="32" height="32" />
                </li>
            </ul>
    )
}
export default DrawerCard;