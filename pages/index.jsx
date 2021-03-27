import Hero from '../components/Hero'
import styles from '../styles/pages/Home.module.scss'

// Page component (React component used by next js)
export default function Home() {
    const content = [
        {
            heading: 'Nokia 21',
            caption: 'Blast past fast.',
            body: (
                <>
                    From $29.12/mo. or $699 before trade-in.
                    <br />
                    Buy directly from Cat with special carrier offers.
                </>
            ),
            image: '/images/hero-1.png',
            dark: false,
        },
        {
            heading: 'TCL 21',
            caption: "It's a leap year.",
            body: (
                <>
                    From $41.62/mo. or $999 before trade-in.
                    <br />
                    Buy directly from Apple with special carrier offers.
                </>
            ),
            image: '/images/hero-2.png',
            dark: true,
        },
        {
            heading: 'Sidekick 21',
            caption: 'Fast Blast to the Past',
            body: (
                <>
                    From $63.82/mo. or $1299 before trade-in.
                    <br />
                    Buy directly from Apple with special carrier offers.
                </>
            ),
            image: '/images/hero-3.png',
            dark: false,
            bottomAlign: true,
        },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.heroGrid}>
                {content.map((heroData) => {
                    const {
                        heading,
                        caption,
                        body,
                        dark,
                        image,
                        bottomAlign,
                    } = heroData
                    return (
                        <div
                            key={heading} // identifier for react to keep track of Hero components
                            className={styles.heroGridItem}
                        >
                            <Hero
                                heading={heading}
                                caption={caption}
                                body={body}
                                dark={dark}
                                image={image}
                                bottomAlign={bottomAlign}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
