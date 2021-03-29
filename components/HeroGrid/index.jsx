import PropTypes from 'prop-types'
import clsx from 'clsx'
import Hero from '../Hero'
import styles from './styles.module.scss'

// Page component (React component used by next js)
const HeroGrid = ({ content }) => {
    return (
        <div className={clsx(styles.container, 'full-width')}>
            <div className={styles.heroGrid}>
                {content.map((heroData) => {
                    const {
                        heading,
                        caption,
                        body,
                        dark,
                        image,
                        bottomAlign,
                    } = heroData
                    return (
                        <div
                            key={heading} // identifier for react to keep track of Hero components
                            className={styles.heroGridItem}
                        >
                            <Hero
                                heading={heading}
                                caption={caption}
                                body={body}
                                dark={dark}
                                image={image}
                                bottomAlign={bottomAlign}
                            />
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
