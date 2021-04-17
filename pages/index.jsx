import HeroGrid from '../components/HeroGrid'
import Menu from '../components/Menu'
import About from '../components/About'
import NewFooter from '../components/NewFooter'

// Page component (React component used by next js)
const Home = () => {
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
            // dark: false,
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
            // dark: false,
            bottomAlign: true,
        },
    ]

    const menuContent = [
        {
            header: 'Fruit',
            image: '/images/menu-1.png',
            color: 'rgba(166, 247, 179, 1)',
        },
        {
            header: 'All Fruit',
            image: '/images/menu-2.png',
            color: 'rgba(249,189,189,1)',
        },
        {
            header: 'Not Fruit',
            image: '/images/menu-3.png',
            color: 'rgba(168,220,236,1)',
        },
    ]

    return (
        <>
            <HeroGrid content={content} />
            <About />
            <Menu content={menuContent} />
            <NewFooter />
        </>
    )
}

export default Home
