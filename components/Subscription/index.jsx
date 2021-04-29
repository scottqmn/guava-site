import StyleGuide from '../styleguide'
import clsx from 'clsx'
import styles from './styles.module.scss'

const Subscription = ({ title, description }) => {
    return (
        <div className={styles.container}>
            <div className={clsx(styles.title, 't-h3')}>{title}</div>
            <div className={styles.row}>
                <div className={clsx(styles.description, 't-button')}>
                    {description}
                </div>
                <form className={styles.form}>
                    <label>
                        <input
                            className={styles.address}
                            type='email'
                            placeholder='Your email address'
                        />
                    </label>
                    <button className={clsx(styles.button, 't-body')}>
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Subscription
