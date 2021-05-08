import Reviews from '../../templates/Reviews'
import REVIEWS from '../../constants/reviews.json'

export const getStaticProps = async () => {
    return {
        props: { reviews: REVIEWS },
    }
}

export default Reviews
