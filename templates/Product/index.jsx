import clsx from 'clsx'
import styles from './styles.module.scss'
import React, { useState } from 'react'
import productPropType from '../../prop-types/product'

const Product = ({ product }) => {
    const [count, setCount] = useState(1)

    // Move to top before any variables are used
    const { title, price, stock, image, description, vendor_url } = product

    // Good to check here but make sure to disable the button as well
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

    // User can type in whatever they want (not checked with min and max yet)
    const handleInputChange = (e) => {
        /**
         * e: change Event
         * e.target: the input (target of the event)
         * e.target.value: the value of the input (passed as a string)
         */

        // parseInt returns NaN if the input is blank,
        // so '|| 0' turns the value to 0 in that case
        const parsedValue = parseInt(e.target.value, 10) || 0
        setCount(parsedValue)
    }

    // As user leaves input, value is checked against
    // min and max and adjusted
    const handleInputBlur = () => {
        // No event e parameter like the change handler
        // only because it isn't needed in this case
        if (count < 1) {
            setCount(1)
        } else if (count > stock) {
            setCount(stock)
        }
    }

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
                            disabled={count === 1}
                            className={styles.button}
                            onClick={decrementCount}
                            type='button'
                        >
                            -
                        </button>
                        <input
                            className={styles.input}
                            type='number'
                            value={count}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                        />
                        <button
                            disabled={count === stock}
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
