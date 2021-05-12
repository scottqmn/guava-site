import clsx from 'clsx'
import styles from './styles.module.scss'
import React, { useState } from 'react'
import productPropType from '../../prop-types/product'

const Product = ({ product }) => {
    const [count, setCount] = useState(1)

    function decrementCount() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    function incrementCount() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

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
                    <div className={styles.row}>
                        <button
                            className={styles.button}
                            onClick={decrementCount}
                            type='button'
                        >
                            -
                        </button>
                        <input placeholder={count} />
                        <button
                            className={styles.button}
                            onClick={incrementCount}
                            type='button'
                        >
                            +
                        </button>
                    </div>
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
