import { useState } from 'react'
import clsx from 'clsx'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import styles from './styles.module.scss'
import Star from '../../public/icons/star.svg'

const DATA = [
    {
        star: 5,
        review:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eaque officiis molestiae repellat pariatur quibusdam corporis deleniti iure?',
        user: {
            icon: '/images/user.png',
            name: 'Kona Geebo',
            location: 'Lakewood, CA',
        },
    },
    {
        star: 3,
        review:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eaque officiis molestiae repellat pariatur quibusdam corporis deleniti iure?',
        user: {
            icon: '/images/user.png',
            name: 'Kanye Geebo',
            location: 'Orange, CA',
        },
    },
    {
        star: 4,
        review:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eaque officiis molestiae repellat pariatur quibusdam corporis deleniti iure?',
        user: {
            icon: '/images/user.png',
            name: 'Penny Geebo',
            location: 'San Diego, CA',
        },
    },
]

const Testimony = ({ data = DATA }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleNext = () => {
        if (activeIndex < data.length - 1) {
            setActiveIndex(activeIndex + 1)
        }
    }
    const handlePrevious = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        }
    }

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.reviewWrap}>
                    <div className={styles.star}>
                        {Array(data[activeIndex].star)
                            .fill(0)
                            .map((_, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <Star key={index} />
                            ))}
                    </div>
                    <div className={styles.review}>
                        {data[activeIndex].review}
                    </div>
                    <div className={styles.userWrap}>
                        <div className={styles.userPic}>
                            <img
                                src={data[activeIndex].user.icon}
                                alt='profilepicture'
                            />
                        </div>
                        <div className={styles.userInfo}>
                            <div> {data[activeIndex].user.name}</div>
                            <dov>{data[activeIndex].user.location}</dov>
                        </div>
                    </div>
                </div>

                <div className={styles.button}>
                    <button type='button' onClick={handlePrevious}>
                        {/* previous */}
                        <ArrowBackIosIcon />
                    </button>
                    <button
                        type='button'
                        className={styles.arrowRight}
                        onClick={handleNext}
                    >
                        <ArrowForwardIosIcon />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Testimony
