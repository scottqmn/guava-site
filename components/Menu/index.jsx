import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Menu = ({ content }) => {
    return (
        <>
            <div className={styles.menuLine}>
                <h1 className={clsx(styles.menu, 't-h2')}>Menu</h1>
                <div className={styles.lineAlign}>
                    <div className={styles.line}> </div>
                </div>
            </div>
            <div className={styles.grid}>
                {content.map((menuData) => {
                    const { header, image, color } = menuData
                    return (
                        <div
                            key={header}
                            className={styles.gridItem}
                            style={{ backgroundColor: color }}
                        >
                            <div className='t-h3'>{header}</div>
                            <div className={styles.image}>
                                <img
                                    className={styles.imgSize}
                                    src={image}
                                    alt='Apple'
                                />
                            </div>
                            <div className={styles.buttonRight}>
                                <a
                                    href='url'
                                    className={clsx(styles.button, 't-button')}
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

Menu.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string,
            image: PropTypes.string,
            color: PropTypes.string,
        })
    ),
}
export default Menu
