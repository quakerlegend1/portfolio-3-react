import React from "react";
import styles from "./drawer.module.css";

function Drawer() {
    
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2>Корзина
                    <img alt="closeBtn" src="../../../images/close.png"/>
                </h2>
            </div>
        </div>
    )
}

export default Drawer