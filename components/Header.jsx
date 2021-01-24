import clsx from 'clsx'
import styles from '../styles/components/Header.module.scss'

const Header = () => {
    return (
        <div className={clsx(styles.container, 'outer')}>
            <div className={clsx('inner')}> </div>
            <div className={styles.links}>
                <div className={styles.linkContainer}>
                    <a href='url' className='t-button'>
                        link1
                    </a>
                    <a href='url' className='t-button'>
                        link2
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
