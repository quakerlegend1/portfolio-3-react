import React from "react";
import styles from "./cardOncart.module.css";
import {cardsArray} from "../../App";

function CardOncart() {
    return (
        <div className={styles.container}>
            <ul className={styles.cards}>
                <li className={styles.card}>
                    <img alt="cart-item" width="70" height="70" src={cardsArray[0].imageUrl}/>
                    <div className={styles.textDescription}>
                        <p>Гранд делюкс</p>
                        <b>12999 руб.</b>
                    </div>
                    <img src="/images/close.png" alt="closeBtn" width="32" height="32" />
                </li>
                <li className={styles.card}>
                    <img alt="cart-item" width="70" height="70" src={cardsArray[1].imageUrl}/>
                    <div className={styles.textDescription}>
                        <p>Чикен Премьер</p>
                        <b>12999 руб.</b>
                    </div>
                    <img src="/images/close.png" alt="closeBtn" width="32" height="32" />
                </li>
                <li className={styles.card}>
                    <img alt="cart-item" width="70" height="70" src={cardsArray[2].imageUrl}/>
                    <div className={styles.textDescription}>
                        <p>Чикен Премьер</p>
                        <b>12999 руб.</b>
                    </div>
                    <img src="/images/close.png" alt="closeBtn" width="32" height="32" />
                </li>
                <li className={styles.card}>
                    <img alt="cart-item" width="70" height="70" src={cardsArray[3].imageUrl}/>
                    <div className={styles.textDescription}>
                        <p>Чикен Премьер</p>
                        <b>12999 руб.</b>
                    </div>
                    <img src="/images/close.png" alt="closeBtn" width="32" height="32" />
                </li>
                <li className={styles.card}>
                    <img alt="cart-item" width="70" height="70" src={cardsArray[0].imageUrl}/>
                    <div className={styles.textDescription}>
                        <p>Чикен Премьер</p>
                        <b>12999 руб.</b>
                    </div>
                    <img src="/images/close.png" alt="closeBtn" width="32" height="32" />
                </li>
                <li className={styles.card}>
                    <img alt="cart-item" width="70" height="70" src={cardsArray[0].imageUrl}/>
                    <div className={styles.textDescription}>
                        <p>Чикен Премьер</p>
                        <b>12999 руб.</b>
                    </div>
                    <img src="/images/close.png" alt="closeBtn" width="32" height="32" />
                </li>
                <li className={styles.card}>
                    <img alt="cart-item" width="70" height="70" src={cardsArray[0].imageUrl}/>
                    <div className={styles.textDescription}>
                        <p>Чикен Премьер</p>
                        <b>12999 руб.</b>
                    </div>
                    <img src="/images/close.png" alt="closeBtn" width="32" height="32" />
                </li>
                <li className={styles.card}>
                    <img alt="cart-item" width="70" height="70" src={cardsArray[0].imageUrl}/>
                    <div className={styles.textDescription}>
                        <p>Чикен Премьер</p>
                        <b>12999 руб.</b>
                    </div>
                    <img src="/images/close.png" alt="closeBtn" width="32" height="32" />
                </li>
                <li className={styles.card}>
                    <img alt="cart-item" width="70" height="70" src={cardsArray[0].imageUrl}/>
                    <div className={styles.textDescription}>
                        <p>Чикен Премьер</p>
                        <b>12999 руб.</b>
                    </div>
                    <img src="/images/close.png" alt="closeBtn" width="32" height="32" />
                </li>

            </ul>
        </div>
    )
}
export default CardOncart;