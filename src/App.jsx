
import styles from "./app.module.css"
import Carousel from "./components/carousel/Carousel"
import Card from "./components/card/Card" 
import Drawer from "./components/drawer/Drawer"
import headerLogo from "/images/header-logo.svg"
import headerCart from "/images/header-cart.svg"
import headerFavourites from "/images/header-favouriotes.svg"
import headerUser from "/images/header-user.svg"
import { useState } from "react"
import cardsArray from "./data"

function App() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)
  const [dataProducts, setdataProducts] = useState(cardsArray)
  const [orderProducts, setorderProducts] = useState([])

  function addToOrder(product) {
    
    console.log(orderProducts)
  }

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
            {dataProducts.map((card)=>
            {return <Card 
            onAddToOrder={addToOrder}
            key={card.id} 
            title={card.title} 
            price={card.price} 
            imageUrl={card.imageUrl}
            currentProduct={card}
            />})}
          </ul>
        </section>
      </main>
    </div>
    </>
  )
}

export default App
