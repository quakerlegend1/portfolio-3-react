import React from "react";
import styles from "./drawer.module.css";
import DrawerCard from "../drawerCard/DrawerCard.jsx";
import cardsArray from "../../data";

 function Drawer(props) {

    return (
        <section className={`${styles.overlay} ${props.isDrawerOpened ? styles.overlayVisible : ""}`} onClick={props.closeDrawer}>
            <div className={styles.drawer} onClick={(event)=>event.stopPropagation()}>
                <h2 style={{display:"flex",justifyContent:"space-between"}}>Корзина
                    <img className={styles.closeBtn} alt="closeBtn" src="../../../images/close.png" onClick={props.closeDrawer}/>
                </h2>

                <div className={styles.drawerCards}>
                    <ul className={styles.Ulcards}>
                        {cardsArray.map((item)=>
                        {return <DrawerCard 
                        key={item.id} 
                        title={item.title} 
                        price={item.price} 
                        imageUrl={item.imageUrl}/>})}
                    </ul>
                </div>
                
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