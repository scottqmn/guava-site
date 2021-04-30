import Menu from '../components/Menu'
import About from '../components/About'

// Page component (React component used by next js)
const Home = () => {
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
            <About
                heading='About'
                title='Guava is the three pal trying to make a living'
                subtitle='Gonna make website for whatever it is you want'
                image='/images/guava-9.png'
                description='Three guava fruit'
            />
            <Menu content={menuContent} />
        </>
    )
}

export default Home
