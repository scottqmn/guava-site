import StyleGuide from '../styleguide'
import clsx from 'clsx'
import styles from './styles.module.scss'

//input is a self closing tag?
const Subscriber = () => {
    return (
        <div className={styles.container}>
            <div className={clsx(styles.subscribe, 't-h3')}>
                Subscribe to our newsletter
            </div>
            <div className={styles.row}>
                <p className={clsx(styles.text, 't-button')}>
                    A monthly digest of the new WOODIES products, hot offers,
                    and resources.
                </p>
                <form>
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

export default Subscriber
