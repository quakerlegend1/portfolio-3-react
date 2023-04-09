
import styles from "./app.module.css"
import Carousel from "./components/carousel/Carousel"
import Card from "./components/card/Card" 
import Drawer from "./components/drawer/Drawer"
import headerLogo from "/images/header-logo.svg"
import headerCart from "/images/header-cart.svg"
import headerFavourites from "/images/header-favouriotes.svg"
import headerUser from "/images/header-user.svg"
import { useState } from "react"



export const cardsArray = [
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
function App() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)
  return (
    <>
    <div className={styles.wrapper}>
      <Drawer 
        isDrawerOpened={isDrawerVisible}
        closeDrawer={()=>setIsDrawerVisible(false)}

      />
      <header className={styles.header}>
        <div className={styles.leftSection}>
          <img alt="header-logo" src={headerLogo}/>
          <div>
            <h2>TASTY-BURGERS</h2>
            <p>Доставка вкусного фастфуда</p>
          </div>
          
        </div>
        <div className={styles.rightSection}>
          <div className={styles.cartBtn} onClick={()=>setIsDrawerVisible(true)}>
            <img alt="header-cart" src={headerCart} width="18" height="17"/>
            <b>1300 руб.</b>
          </div>
          <img alt="header-favouriotes" src={headerFavourites} width="21" height="19"/>
          <img alt="header-user" src={headerUser} width="20" height="20" />
        </div>
      </header>
      <main className={styles.main}>
      <Carousel/>
        <div className={styles.search}>
          <h2>Все товары</h2>
          <input type="text" placeholder="Поиск..."/>
        </div>
        <section>
          <ul className={styles.cardsContainer}>
            {cardsArray.map((card)=>{return <Card key={card.id} title={card.title} price={card.price} imageUrl={card.imageUrl}/>})}
          </ul>
        </section>
      </main>
    </div>
    </>
  )
}

export default App
