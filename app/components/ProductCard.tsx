import AddToCart from "./AddToCart";

{/*
import styles from "./ProductCard.module.css";

const ProductCard = () => {
    return (
        <div className={styles.card}>
            <AddToCart />
        </div>
    )
}
*/}  // CSS styling with module

// styling with tailwindcss
const ProductCard = () => {
    return (
        <div>
            <AddToCart />
        </div>
    )
}

export default ProductCard;