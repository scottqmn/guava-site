import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const isProduction = process.env.NODE_ENV === 'production'

        return { ...initialProps, isProduction }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    {/* Google Fonts */}
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Fugaz+One&family=Nunito:ital,wght@0,600;0,900;1,600;1,900&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
