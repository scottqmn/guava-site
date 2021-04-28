import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import NewFooter from '../NewFooter'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='outer'>
                <div className='inner'>{children}</div>
            </div>
            <Footer />
            <NewFooter />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
