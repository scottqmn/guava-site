import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './styles.module.scss'
import productPropType from '../../prop-types/product'

const Products = ({ products }) => {
    return (
        <div>
            <h1 className='t-h1'>Products</h1>
            <ul className={styles.productList}>
                {products.map(({ id, title, image }) => {
                    return (
                        <li key={id} className={styles.productWrap}>
                            <Link href={`/products/${id}`}>
                                <a className={styles.product}>
                                    <img src={image} alt={title} />
                                    <div className={styles.productTitle}>
                                        {title}
                                    </div>
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

Products.propTypes = {
    products: PropTypes.arrayOf(productPropType),
}

export default Products
