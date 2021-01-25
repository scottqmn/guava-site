/* eslint-disable react/prop-types */
import Head from 'next/head'
import 'normalize.css'
import '../styles/main.scss'
import metadata from '../constants/metadata'
import Header from '../components/Header'

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta charSet='utf-8' />
                <meta
                    httpEquiv='Content-Type'
                    content='text/html; charset=utf-8'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta name='description' content={metadata.description} />
                {/* Favicons */}
                <link rel='icon' href='/favicon.ico' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                {/* Open Graph/Facebook */}
                <meta property='og:title' content={metadata.title} />
                <meta
                    property='og:description'
                    content={metadata.description}
                />
                <meta property='og:image' content={metadata.image} />
                <meta property='og:url' content={metadata.url} />
                <meta property='og:type' content='website' />
                {/* Twitter */}
                <meta name='twitter:title' content={metadata.title} />
                <meta
                    name='twitter:description'
                    content={metadata.description}
                />
                <meta name='twitter:image' content={metadata.image} />
                <meta name='twitter:card' content='summary' />
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    )
}

export default App
