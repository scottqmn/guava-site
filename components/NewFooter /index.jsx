import StyleGuide from '../Styleguide'
import clsx from 'clsx'
import styles from './styles.module.scss'

const NewFooter = () => {
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

export default NewFooter
