import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from '../styles/components/Hero.module.scss'

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
    const { heading, caption, dark, body, image } = props

    return (
        <div className={clsx(dark && 'bg-black c-white', 'outer')}>
            <div className={clsx(styles.content, 'inner')}>
                <h2 className={clsx(styles.heading, 't-heading', 't-center')}>
                    {heading}
                </h2>
                <div
                    className={clsx(styles.caption, 't-subheading', 't-center')}
                >
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
                <img className={styles.img} src={image} alt='iphones' />
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
}

export default Hero
