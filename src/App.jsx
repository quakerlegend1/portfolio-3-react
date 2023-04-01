
import styles from "./app.module.css"
import Carousel from "./components/carousel/Carousel"
import headerLogo from "./images/header-logo.svg"
import headerCart from "./images/header-cart.svg"
import headerFavourites from "./images/header-favouriotes.svg"
import headerUser from "./images/header-user.svg"

function App() {
  return (
    
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.leftSection}>
          <img alt="header-logo" src={headerLogo}/>
          <div>
            <h2>TASTY-BURGERS</h2>
            <p>Доставка вкусного фастфуда</p>
          </div>
          
        </div>
        <div className={styles.rightSection}>
          <img alt="header-cart" src={headerCart} width="18" height="17"/>
          <b>1300 руб.</b>
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
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>22</li>
            <li>31</li>
            <li>33</li>
          </ul>
        </section>
      </main>
    </div>
   
  )
}

export default App
