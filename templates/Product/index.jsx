import clsx from 'clsx'
import styles from './styles.module.scss'
import productPropType from '../../prop-types/product'

const Product = ({ product }) => {
    const { title, price, stock, image, description, vendor_url } = product

    return (
        <div>
            <h1 className={clsx(styles.title, 't-h1')}>{title}</h1>
            <div className={styles.container}>
                <div className={styles.columnLeft}>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.columnRight}>
                    <div>{description}</div>
                    <div>${price}</div>
                    <div>in stock: {stock}</div>
                    <a href={vendor_url}>learn more</a>
                </div>
            </div>
        </div>
    )
}

Product.propTypes = {
    product: productPropType,
}

export default Product
