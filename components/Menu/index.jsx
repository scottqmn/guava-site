import clsx from 'clsx'
import styles from './styles.module.scss'

const Menu = () => {
    const content = [
        {
            heading: 'Fruit',
            image: '/images/',
            button: 'Shop Now',
        },
        {
            heading: 'All Fruit',
            image: '/images/',
            button: 'Shop Now',
        },
        {
            heading: 'Not Fruit',
            image: '/images/',
            button: 'Shop Now',
        },
    ]
    return (
        <div>
            <h1 className='t-heading'>Menu</h1>
        </div>
    )
}
export default Menu
