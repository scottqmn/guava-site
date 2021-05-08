import Products from '../../templates/Products'
import DATA from '../../constants/products.json'

export const getStaticProps = async () => {
    return {
        props: { products: DATA },
    }
}

export default Products
