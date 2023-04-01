import styles from "./carousel.module.css"
import carousel_1 from "src\images\carousel-1.png"

function Carousel() {
    return (
        <article className={styles.carouselMain}>
            <img alt="carousel" src={carousel_1}/>
        </article>
    )
}

export default Carousel