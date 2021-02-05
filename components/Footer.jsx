import Link from 'next/link'
import clsx from 'clsx'
import styles from '../styles/components/Footer.module.scss'

const Footer = () => {
    const links = [
        { href: '', name: 'Copyright © All rights reserved.' },
        { href: '/privacypolicy', name: 'Privacy Policy' },
        { href: '/termsofuse', name: 'Terms of Use' },
        { href: '/legal', name: 'Legal' },
        { herf: '/countryoforigin', name: 'United States' },
    ]
    return (
        <>
            <div className={clsx(styles.outer, 'outer')}>
                <div className={clsx(styles.Container, 'inner')}>
                    {links.map((linkData) => {
                        const { href, name } = linkData
                        return (
                            <div key={name}>
                                {href ? (
                                    <Link href={href}>
                                        <a>{name}</a>
                                    </Link>
                                ) : (
                                    name
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Footer
