
import styles from "./app.module.css"
import headerLogo from "./images/header-logo.svg"

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
          <img alt="header-cart" src="..\src\images\header-cart.svg" width="18" height="17"/>
          <b>1300 руб.</b>
          <img alt="header-favouriotes" src="..\src\images\header-favouriotes.svg" width="21" height="19"/>
          <img alt="header-user" src="..\src\images\header-user.svg" width="20" height="20" />
        </div>
      </header>
    </div>
  )
}

export default App
