import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='outer'>
                <div className='inner'>{children}</div>
            </div>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
