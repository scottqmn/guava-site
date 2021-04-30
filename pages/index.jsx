import Menu from '../components/Menu'
import About from '../components/About'
import NewFooter from '../components/NewFooter'

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
            {/* <About /> */}
            <Menu content={menuContent} />
        </>
    )
}

export default Home
