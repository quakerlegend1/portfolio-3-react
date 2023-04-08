import React from "react";
import styles from "./drawer.module.css";


 function Drawer(props) {
   
   
    return (
        <div className={`${styles.overlay} ${props.isDrawerOpened ? styles.overlayVisible : ""}`} onClick={props.closeDrawer}>
            <div className={styles.drawer} onClick={(event)=>event.stopPropagation()}>
                <h2 style={{display:"flex",justifyContent:"space-between"}}>Корзина
                    <img className={styles.closeBtn} alt="closeBtn" src="../../../images/close.png" onClick={props.closeDrawer}/>
                </h2>
            </div>
        </div>
    )
}

export default Drawer