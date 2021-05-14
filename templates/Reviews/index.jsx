import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from './styles.module.scss'
import reviewPropType from '../../prop-types/review'

const Reviews = ({ reviews }) => {
    console.log(reviews.length)
    const [page, setPage] = useState(0)
    const nextPage = () => setPage(page + 1)
    const backPage = () => setPage(page - 1)
    const pageArray = []
    let tempArray = []
    for (let i = 0; i < reviews.length; i += 1) {
        if (tempArray.length === 10) {
            pageArray.push(tempArray)
            tempArray = []
        }
        tempArray.push(reviews[i])
    }
    if (tempArray.length > 0) {
        pageArray.push(tempArray)
    }

    return (
        <div>
            <h1 className='t-h1'>Reviews</h1>
            <button type='button' onClick={backPage} disabled={page === 0}>
                previous
            </button>
            <div>page {page + 1}</div>
            <button type='button' onClick={nextPage}>
                next
            </button>
            <ul className={styles.reviewList}>
                {pageArray[page].map(
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
