import clsx from 'clsx'
import styles from './styles.module.scss'

const Menu = () => {
    return (
        <>
            <div className={styles.menuLine}>
                <h1 className={clsx(styles.menu, 't-h2')}>Menu</h1>
                <div className={styles.lineAlign}>
                    <div className={styles.line}> </div>
                </div>
            </div>
            <div className={styles.grid}>
                <div className={styles.gridItem}>
                    {' '}
                    <div className='t-h3'>Fruit</div>
                    <div className={styles.image}>
                        <img
                            className={styles.imgSize}
                            src='/images/menu-1.png'
                            alt='Apple'
                        />
                    </div>
                    <div className={styles.buttonRight}>
                        <a
                            href='url'
                            className={clsx(styles.button, 't-button')}
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
                {/* <div className={styles.bgColor}>
                    {' '}
                    <div>Fruits </div>
                    <img src='/images/menu-2.png' alt='Apple' />
                    <a href='url' className='t-button'>
                        Shop Now
                    </a>
                </div>
                <div className={styles.bgColor}>
                    {' '}
                    <div>Fruits </div>
                    <img src='/images/menu-3.png' alt='Apple' />
                    <a href='url' className='t-button'>
                        Shop Now
                    </a>
                </div> */}
            </div>
        </>
    )
}
export default Menu
