import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import NewFooter from '../NewFooter'
import styles from './styles.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <NewFooter />
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
