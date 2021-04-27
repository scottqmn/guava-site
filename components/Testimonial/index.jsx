import clsx from 'clsx'
import styles from './styles.module.scss'
import Testimony from '../Testimony'

const Testimonial = () => {
    return (
        <>
            <div className={styles.heading}>
                <div className={clsx(styles.title, 't-h2')}>Testimonial</div>
                <div className={styles.line} />
            </div>
            <div className={styles.grid}>
                <div className={styles.imgWrap}>
                    <img
                        src='/images/testimonial-1.png'
                        alt='basket of fruits'
                        className={styles.img}
                    />
                </div>

                <div className={styles.testimony}>
                    <Testimony />
                </div>
            </div>
        </>
    )
}

export default Testimonial
