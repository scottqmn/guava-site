import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const About = ({ heading, image, description, title, subtitle }) => {
    return (
        <div>
            <h1 className={clsx(styles.title, 't-h2')}>{heading}</h1>
            <div className={styles.container}>
                <div className={styles.imageWrap}>
                    {
                        <img
                            className={styles.image}
                            src={image}
                            alt={description}
                        />
                    }
                </div>
                <div className={styles.text}>
                    <p className='t-h2'>{title}</p>
                    <p className='t-subtitle'>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

About.propTypes = {
    heading: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default About
