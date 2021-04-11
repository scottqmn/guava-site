import StyleGuide from '../Styleguide'
import clsx from 'clsx'
import styles from './styles.module.scss'

const About = () => {
    return (
        <div>
            <h1 className={clsx(styles.title, 't-h2')}>About</h1>
            <div className={clsx(styles.container, 'inner')}>
                <div className={styles.myImage}>
                    <img src='images/guava-9.png' alt='Three guava fruit' />
                </div>
                <div className={styles.text}>
                    <p className={clsx(styles.caption, 't-h2')}>
                        Guava is the three pals trying to make a living
                    </p>
                    <p className={clsx(styles.subtitle, 't-subtitle')}>
                        Gonna make a website for whatever it is you want
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About
