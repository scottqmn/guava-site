import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const About = (props) => {
    return (
        <div>
            <h1 className={clsx(styles.title, 't-h2')}>{props.heading}</h1>
            <div className={styles.container}>
                <div className={styles.myImage}>
                    <img src={props.image} alt='Three guava fruit' />
                </div>
                <div className={styles.text}>
                    <p className={clsx(styles.caption, 't-h2')}>
                        {props.title}
                    </p>
                    <p className={clsx(styles.subtitle, 't-subtitle')}>
                        {props.subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}

About.propTypes = {
    content: PropTypes.string,
}
export default About
