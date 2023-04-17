import React, { useState } from "react";
import styles from "./drawerCard.module.css";


function DrawerCard({imageUrl,title,price,deleteCurrentProduct,}) {

    return (
                <li className={styles.card}>
                    <img alt="cart-item" width="70" height="70" src={imageUrl}/>
                    <div className={styles.textDescription}>
                        <p>{title}</p>
                        <b>{price} руб.</b>
                    </div>
                    <img onClick={deleteCurrentProduct} src="/images/close.png" alt="closeBtn" width="32" height="32" />
                </li>
    )
}
export default DrawerCard;