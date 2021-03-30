import clsx from 'clsx'
import styles from './styles.module.scss'

const Styleguide = () => {
    return (
        <div>
            <h2 className={clsx(styles.heading, 't-h1')}>Color Classes</h2>
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
                <h1 className='t-h1'>t-h1</h1>
                <h2 className='t-h2'>t-h2</h2>
                <h2 className='t-h3'>t-h3</h2>
                <div className='t-subtitle'>t-subtitle</div>
                <div className='t-body'>t-body</div>
                <div className='t-button'>t-button</div>
                <div className='t-label'>t-label</div>
            </div>
        </div>
    )
}

export default Styleguide
