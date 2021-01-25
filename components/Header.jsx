import clsx from 'clsx'
import styles from '../styles/components/Header.module.scss'

const Header = () => {
    const links = [
        { href: '/', name: 'Home', image: '/images/icon.png' },
        {
            href: '/products',
            name: 'Products',
        },
        { href: '/styleguide', name: 'Styleguide' },
    ]
    return (
        <div className={clsx(styles.container, 'outer')}>
            <div className={clsx(styles.linkContainer, 'inner')}>
                {links.map((linkData) => {
                    const { href, name, image } = linkData
                    return (
                        <a
                            key={name}
                            href={href}
                            className={clsx(styles.links, 't-button')}
                        >
                            {image ? (
                                <img
                                    className={styles.icon}
                                    src={image}
                                    alt={name}
                                />
                            ) : (
                                name
                            )}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Header