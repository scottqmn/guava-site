import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'
import styles from './styles.module.scss'

export const HOME = {
    href: '/',
    name: 'Guava',
    icon: '/images/icon.png',
    alt: 'guava logo',
}

export const LINKS = [
    {
        href: '/',
        name: 'Home',
    },
    {
        href: '/about',
        name: 'About',
    },
    {
        href: '/work',
        name: 'Work',
    },
    { href: '/styleguide', name: 'Styleguide' },
    {
        href: '/contact',
        name: 'Contact',
        border: true,
    },
]

const Header = () => {
    const router = useRouter()

    return (
        <div className={clsx(styles.container, 'outer')}>
            <Link href={HOME.href}>
                <a className={styles.logo}>
                    <img
                        className={styles.icon}
                        src={HOME.icon}
                        alt={HOME.alt}
                    />
                    <div className={clsx(styles.name, 't-heading')}>
                        {HOME.name}
                    </div>
                </a>
            </Link>
            <div className={styles.nav}>
                <div className={clsx(styles.linkContainer, 'inner')}>
                    {LINKS.map(({ href, name, border }) => {
                        const isActive = router.pathname === href
                        return (
                            <Link key={name} href={href}>
                                <a
                                    className={clsx(
                                        styles.link,
                                        isActive && styles.isActive,
                                        border && styles.border,
                                        't-button'
                                    )}
                                >
                                    {name}
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header
