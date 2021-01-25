import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/pages/Home.module.scss'

// Page component (React component used by next js)
export default function Home() {
    const content = [
        {
            heading: 'iPhone 12',
            caption: 'Blast past fast.',
            body: (
                <>
                    From $29.12/mo. or $699 before trade-in.
                    <br />
                    Buy directly from Apple with special carrier offers.
                </>
            ),
            image: '/images/hero-1.png',
            dark: false,
        },
        {
            heading: 'iPhone 12 Pro',
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
    ]
    return (
        <div className={styles.container}>
            <h1 className='t-heading'>Homepage</h1>
            {content.map((heroData) => {
                const { heading, caption, body, dark, image } = heroData
                return (
                    <Hero
                        key={heading} // identifier for react to keep track of Hero components
                        heading={heading}
                        caption={caption}
                        body={body}
                        dark={dark}
                        image={image}
                    />
                )
            })}
        </div>
    )
}
