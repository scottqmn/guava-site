import PropTypes from 'prop-types'
import clsx from 'clsx'
import Hero from '../Hero'
import styles from './styles.module.scss'

const CONTENT = [
    {
        heading: 'Nokia 21',
        caption: 'Blast past fast.',
        body: (
            <>
                From $29.12/mo. or $699 before trade-in.
                <br />
                Buy directly from Cat with special carrier offers.
            </>
        ),
        image: '/images/hero-1.png',
        // dark: false,
    },
    {
        heading: 'TCL 21',
        caption: "It's a leap year.",
        body: (
            <>
                From $41.62/mo. or $999 before trade-in.
                <br />
                Buy directly from Apple with special carrier offers.
            </>
        ),
        image: '/images/hero-2.png',
        dark: true,
    },
    {
        heading: 'Sidekick 21',
        caption: 'Fast Blast to the Past',
        body: (
            <>
                From $63.82/mo. or $1299 before trade-in.
                <br />
                Buy directly from Apple with special carrier offers.
            </>
        ),
        image: '/images/hero-3.png',
        // dark: false,
        bottomAlign: true,
    },
]

const HeroGrid = ({ content = CONTENT }) => {
    return (
        <div className={clsx(styles.container, 'full-width')}>
            <div className={styles.heroGrid}>
                {content.map((heroData) => {
                    return (
                        <div
                            key={heroData.heading} // unique identifier for react to keep track of Hero components
                            className={styles.heroGridItem}
                        >
                            <Hero {...heroData} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

HeroGrid.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string.isRequired,
            caption: PropTypes.string,
            body: PropTypes.node,
            image: PropTypes.string.isRequired,
            dark: PropTypes.bool,
            bottomAlign: PropTypes.bool,
        })
    ),
}

export default HeroGrid
