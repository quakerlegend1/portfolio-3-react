import React from "react";
import styles from "./drawer.module.css";


 function Drawer(props) {
   
   
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 style={{display:"flex",justifyContent:"space-between"}}>Корзина
                    <img alt="closeBtn" src="../../../images/close.png" onClick={props.onClose}/>
                </h2>
            </div>
        </div>
    )
}

export default Drawer