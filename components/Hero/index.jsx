import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

// helper function, hypothetical: only used in some cases
export const formatYell = (str) => {
    // Check if str has .toUpperCase
    const hasToUpperCase = str.toUpperCase

    if (hasToUpperCase) {
        return str.toUpperCase()
    }

    // otherwise, return unformatted
    return str
    // return str?.toUpperCase() || str
}

// React component, hypothetical: always used
const Hero = (props) => {
    // object destructuring
    const { heading, caption, dark, body, image, bottomAlign } = props

    return (
        <div className={clsx(dark && 'bg-black c-white')}>
            <div className={styles.content}>
                <h2 className={clsx(styles.heading, 't-h1', 't-center')}>
                    {heading}
                </h2>
                <div className={clsx(styles.caption, 't-h2', 't-center')}>
                    {caption}
                </div>
                <p className={clsx(styles.body, 't-body t-center c-grey')}>
                    {body}
                </p>
                <div className={styles.links}>
                    <div className={styles.linkContainer}>
                        <a href='url' className='t-button c-link'>
                            Learn more &gt;
                        </a>
                        <a href='url' className='t-button c-link'>
                            Buy &gt;
                        </a>
                    </div>
                </div>
                <img
                    className={clsx(
                        styles.img,
                        bottomAlign && styles.bottomAlign
                    )}
                    src={image}
                    alt='iphones'
                />
            </div>
        </div>
    )
}

Hero.propTypes = {
    heading: PropTypes.string,
    caption: PropTypes.string,
    dark: PropTypes.bool,
    body: PropTypes.node,
    image: PropTypes.string,
    bottomAlign: PropTypes.bool,
}

export default Hero
