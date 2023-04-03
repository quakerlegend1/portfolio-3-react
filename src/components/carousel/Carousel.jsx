import styles from "./carousel.module.css"
import carousel from "/images/carousel-1.png"

function Carousel() {
    return (
        <article className={styles.carouselMain}>
            <img alt="carousel" src={carousel}/>
        </article>
    )
}

export default Carousel