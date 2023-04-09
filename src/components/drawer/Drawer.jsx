import React from "react";
import styles from "./drawer.module.css";
import CardOncart from "..//cardOncart/cardOncart.jsx"

 function Drawer(props) {
   
   
    return (
        <section className={`${styles.overlay} ${props.isDrawerOpened ? styles.overlayVisible : ""}`} onClick={props.closeDrawer}>
            <div className={styles.drawer} onClick={(event)=>event.stopPropagation()}>
                <h2 style={{display:"flex",justifyContent:"space-between"}}>Корзина
                    <img className={styles.closeBtn} alt="closeBtn" src="../../../images/close.png" onClick={props.closeDrawer}/>
                </h2>
                <CardOncart/>
                <div className={styles.totalBlock}>
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div className={styles.dottedLine}></div>
                            <b>24000 руб</b>
                        </li>
                    </ul>
                    <button>
                        Оформить заказ <img alt="arrow" src="/images/arrow.svg"/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Drawer