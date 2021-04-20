import StyleGuide from '../Styleguide'
import clsx from 'clsx'
import styles from './styles.module.scss'

const NewFooter = () => {
    return (
        //outer and inner explanation?//
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
            <div className={styles.copyright}>
                <p>© 2021 Guava Site</p>
            </div>
        </div>
    )
}

export default NewFooter
