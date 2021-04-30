/* eslint-disable react/prop-types */
import 'normalize.css'
import '../styles/main.scss'
import Metadata from '../components/Metadata'
import Layout from '../components/Layout'

function App({ Component, pageProps }) {
    return (
        <>
            <Metadata />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default App
