import styles from "./carousel.module.css";
import carousel from "/images/carousel-1.png";
import logo from "/images/logo-fav.jpg";

function Carousel({changeLogo}) {
    return (
        <article className={styles.carouselMain}>
            <img alt="carousel" src={changeLogo ? carousel : logo}/>
        </article>
    )
}

export default Carousel