import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import styles from './styles.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={styles.main}>
            <Header />
            <div className='outer'>
                <div className='inner'>{children}</div>
            </div>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
