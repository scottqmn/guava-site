import clsx from 'clsx'
import styles from './styles.module.scss'

const Styleguide = () => {
    return (
        <div>
            <h2 className={clsx(styles.heading, 't-heading')}>Color Classes</h2>
            <div
                // clsx is to combine different variables for classNames
                className={clsx(styles.section, styles.colors, 't-caption')}
            >
                <div className='c-black'>c-black</div>
                <div className='c-grey'>c-grey</div>
                <div className='c-white bg-black'>c-white</div>
                <div className='c-link'>c-link</div>
            </div>
            <div className={clsx(styles.section, styles.types)}>
                <h1 className='t-heading'>t-heading</h1>
                <h2 className='t-subheading'>t-subheading</h2>
                <div className='t-body'>t-body</div>
                <div className='t-button'>t-button</div>
            </div>
        </div>
    )
}

export default Styleguide
