import clsx from 'clsx'
import styles from './styles.module.scss'

const Testimonial = () => {
    return (
        <>
            <div className={styles.heading}>
                <div className={clsx(styles.title, 't-h2')}>Testimonial</div>
                <div className={styles.line} />
            </div>
            <div>
                <img
                    src='/images/testimonial-1.png'
                    alt='basket of fruits'
                    className={styles.img}
                />
            </div>
        </>
    )
}

export default Testimonial
