import React from "react";
import styles from "./drawer.module.css";
import DrawerCard from "../drawerCard/DrawerCard.jsx";


const cardsArray = [
    { id: 1,
      title: "Фреш Маффин",
      price: 189,
      imageUrl: "/images/1_fresh_muffin.png"
      },
      { id: 2,
      title: "Биг Спейшил",
      price: 325,
      imageUrl: "/images/2_big_special_rost.png"
      },
      { id: 3,
      title: "Сырный Ролл",
      price: 210,
      imageUrl: "/images/3_surnii_roll.png"
      },
      { id: 4,
      title: "Биг Хит",
      price: 165,
      imageUrl: "/images/4_bighit.png"
      },
      { id: 5,
      title: "Чизбургер",
      price: 69,
      imageUrl: "/images/5_cheeseburger.png"
      },
      { id: 6,
      title: "Гамбургер",
      price: 57,
      imageUrl: "/images/6_hamburger.png"
      },
      { id: 7,
      title: "Чикенбургер",
      price: 59,
      imageUrl: "/images/7_chikenburger.png"
      },
      { id: 8,
      title: "Чикен Премьер",
      price: 159,
      imageUrl: "/images/8_chikenpremier.png"
      },
      { id: 9,
      title: "Цезарь Ролл",
      price: 179,
      imageUrl: "/images/9_cesar_roll.png"
      },
      { id: 10,
      title: "Двойной Гранд",
      price: 253,
      imageUrl: "/images/10_double_grand.png"
      },
      { id: 11,
      title: "Шримп Ролл",
      price: 229,
      imageUrl: "/images/11_shrimp.png"
      },
      { id: 12,
      title: "Фишбургер",
      price: 215,
      imageUrl: "/images/12_fishburger.png"
      }
  ]

 function Drawer(props) {

    return (
        <section className={`${styles.overlay} ${props.isDrawerOpened ? styles.overlayVisible : ""}`} onClick={props.closeDrawer}>
            <div className={styles.drawer} onClick={(event)=>event.stopPropagation()}>
                <h2 style={{display:"flex",justifyContent:"space-between"}}>Корзина
                    <img className={styles.closeBtn} alt="closeBtn" src="../../../images/close.png" onClick={props.closeDrawer}/>
                </h2>
                <div className={styles.drawerCards}>
                    <ul className={styles.Ulcards}>
                        {cardsArray.map((item)=>{return <DrawerCard key={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl}/>})}
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