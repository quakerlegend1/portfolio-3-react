import styles from "./header.module.css"
import headerLogo from "/images/header-logo.svg"
import headerCart from "/images/header-cart.svg"
import headerFavourites from "/images/header-favouriotes.svg"
import headerUser from "/images/header-user.svg"
import {Link} from "react-router-dom"

function Header({totalPrice, openDrawer, setChangeLogo}) {

  function changeLogo() {
    setChangeLogo((prev)=>!prev)
  }
    return (
        <header className={styles.header}>
          
        <Link to="/" onClick={changeLogo}>
          <div className={styles.leftSection}>
            <img alt="header-logo" src={headerLogo}/>
            <div>
              <h2>TASTY-BURGERS</h2>
              <p>Доставка вкусного фастфуда</p>
            </div>
          </div>
        </Link>
        <div className={styles.rightSection}>
          <div className={styles.cartBtn} onClick={()=>openDrawer(true)}>
            <img alt="header-cart" src={headerCart} width="18" height="17"/>
            <b>{totalPrice} руб.</b>
          </div>
          <Link to="/favourites"  onClick={changeLogo}>
            <img alt="header-favouriotes" src={headerFavourites} width="21" height="19"/>
          </Link>
          <img alt="header-user" src={headerUser} width="20" height="20" />
        </div>
      </header>
    )
}

export default Header