import Product from '../../templates/Product'
import DATA from '../../constants/products.json'

export const getStaticProps = async (context) => {
    const uid = context?.params?.uid
    const product = DATA.find(({ id }) => id === parseInt(uid, 10))

    return {
        props: { product },
    }
}

export const getStaticPaths = async () => {
    const uidPaths =
        DATA.map(({ id }) => {
            return { params: { uid: `${id}` } }
        }) || []

    return {
        paths: uidPaths,
        fallback: false,
    }
}

export default Product
