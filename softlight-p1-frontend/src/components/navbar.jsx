import '../styles/navbar.css'

function Navbar() {
    return (
        <nav className='navbar-main-container'>
            <section className='logo-cont'>
                <img className='logo-icon' src='/app-icon.png' alt='an image of art supplies'></img>
                <p className='logo-text'>FigML</p>
            </section>
            <button className='support-btn' type='button' onClick={() => window.location.href = '/support'}>Support</button>
        </nav>
    )
}

export default Navbar 