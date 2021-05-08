import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import reviewPropType from '../../prop-types/review'

const Reviews = ({ reviews }) => {
    return (
        <div>
            <h1 className='t-h1'>Reviews</h1>
            <ul className={styles.reviewList}>
                {reviews.map(
                    ({
                        id,
                        icon,
                        name,
                        email,
                        username,
                        location,
                        review,
                        rating,
                    }) => {
                        return (
                            <li key={id} className={styles.review}>
                                <img
                                    className={styles.reviewIcon}
                                    src={icon}
                                    alt={`${username} profile icon`}
                                />
                                <div>{rating} / 10</div>
                                <div>{username}</div>
                                <div>{name}</div>
                                <div>{location}</div>
                                <a href={`mailto:${email}`}>{email}</a>
                                <div className={styles.reviewContent}>
                                    {review}
                                </div>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    )
}

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(reviewPropType),
}

export default Reviews
