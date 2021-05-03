import clsx from 'clsx'
import PropTypes from 'prop-types'
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
                    <button
                        type='button'
                        className={clsx(styles.button, 't-body')}
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}

Subscription.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}
export default Subscription
