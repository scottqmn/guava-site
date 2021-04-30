import styles from './styles.module.scss'

const Footer = () => {
    return (
        <div className='outer'>
            <div className='inner'>
                <div className={styles.footer}>
                    <div className={styles.row}>
                        <a href='/about' className={styles.text}>
                            About
                        </a>
                        <a href='/work' className={styles.text}>
                            Work
                        </a>
                        <a href='/contact' className={styles.text}>
                            Contact
                        </a>
                    </div>
                    <div className={styles.copyright}>© 2021 Guava Site</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
