import StyleGuide from '../Styleguide'
import clsx from 'clsx'
import styles from './styles.module.scss'

const AboutComponent = () => {
    return (
        <div>
            <h1 className={clsx(styles.title, 't-h2')}>About</h1>
            <br></br>
            <div className={clsx(styles.container, 'inner')}>
                <div className={styles.myImage}>
                    <img src='images/guava-9.png' />
                </div>
                <div className={clsx(styles.text, 'inner')}>
                    <h2 className={clsx(styles.caption, 't-h2')}>
                        Guava is the three pals trying to make a living
                    </h2>
                    <h3 className={clsx(styles.subtitle, 't-subtitle')}>
                        Gonna make a website for whatever it is you want
                    </h3>
                </div>
            </div>
        </div>
    )
}
export default AboutComponent
