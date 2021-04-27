import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const About = ({ heading, image, title, subtitle }) => {
    return (
        <div>
            <h1 className={clsx(styles.title, 't-h2')}>{heading}</h1>
            <div className={styles.container}>
                <div className={styles.myImage}>
                    {
                        <img
                            className={styles.imageSize}
                            src={image}
                            alt='Three guava fruit'
                        />
                    }
                </div>
                <div className={styles.text}>
                    <p className={clsx(styles.text, 't-h2')}>{title}</p>
                    <p className={clsx(styles.text, 't-subtitle')}>
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}

About.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string,
            image: PropTypes.string,
            title: PropTypes.string,
            subtitle: PropTypes.string,
        })
    ),
}

export default About
