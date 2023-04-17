import {Link, Route, Routes} from "react-router-dom";
import styles from "./app.module.css";

import Carousel from "./components/carousel/Carousel";
import Drawer from "./components/drawer/Drawer";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Favourite from "./pages/favourite/Favourite";
import ErrorPage from "./pages/Error-page";

import { useState } from "react";
import cardsArray from "./data";






function App() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false) 
  const [dataProducts, setdataProducts] = useState(cardsArray)
  const [orderItems, setOrderItems] = useState([])
  const [favouriteItems, setFavouriteItems] = useState([])
  const [changeLogo, setChangeLogo] = useState(true)

  let totalPrice = orderItems.reduce((sum,obj)=>sum+obj.price,0)
  
    
  function addToOrder(product) {
    setOrderItems((prev)=>[...prev, product])
  }

  function deleteFromOrder(product) {
  setOrderItems((prev)=>prev.filter(item => item !== product))
  }

  function addToFavourites(product) {
    setFavouriteItems((prev)=>[...prev, product])
  }

  function deleteFromFavourites(product) {
    setFavouriteItems((prev)=>prev.filter(item => item !== product))
    }

  return (
    <>
    <div className={styles.wrapper}>
      <Drawer 
        onDeleteFromOrder={deleteFromOrder}
        cartItems={orderItems}
        isDrawerOpened={isDrawerVisible}
        closeDrawer={()=>setIsDrawerVisible(false)}
        totalPrice={totalPrice}
      />

      <Header 
      setChangeLogo={setChangeLogo}
      totalPrice={totalPrice}
      openDrawer={setIsDrawerVisible}
      />
  
      <main className={styles.main}>
      <Carousel changeLogo={changeLogo}/>

      <Routes>
        <Route path="" element={
          <Home
          dataProducts={dataProducts}
          deleteFromOrder={deleteFromOrder}
          addToOrder={addToOrder}
          addToFavourites={addToFavourites}
          deleteFromFavourites={deleteFromFavourites}
          />}
        />
        <Route path="favourites" element={
          <Favourite
          favouriteItems={favouriteItems}
          />
        }
        />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      </main>
    </div>
    </>
  )
}

export default App
