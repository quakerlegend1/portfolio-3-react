import React, { useState } from "react";
import styles from "./drawer.module.css";
import DrawerCard from "../drawerCard/DrawerCard.jsx";


 function Drawer({closeDrawer,isDrawerOpened,onDeleteFromOrder,cartItems,totalPrice}) {
    

    return (
        <section className={`${styles.overlay} ${isDrawerOpened ? styles.overlayVisible : ""}`} onClick={closeDrawer}>
            <div className={styles.drawer} onClick={(event)=>event.stopPropagation()}>
                <h2 style={{display:"flex",justifyContent:"space-between"}}>Корзина
                    <img className={styles.closeBtn} alt="closeBtn" src="../../../images/close.png" onClick={closeDrawer}/>
                </h2>

                {cartItems.length > 0 ? (<><div className={styles.drawerCards}>
                    <ul className={styles.Ulcards}>
                        {cartItems.map((item)=>
                        {return <DrawerCard 
                        deleteCurrentProduct={()=>onDeleteFromOrder(item)}
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
                            <b>{totalPrice} руб</b>
                        </li>
                    </ul>
                    <button>
                        Оформить заказ <img alt="arrow" src="/images/arrow.svg"/>
                    </button>
                </div></>)
                : (
                <div className={styles.emptyCartWrapper}>
                    <img alt="emptyCart" width="120" height="120" src="/images/emptyCart.png"/>
                    <h3>Корзина пустая</h3>
                    <span>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</span>
                </div>
                )}

            </div>
        </section>
    )
}

export default Drawer