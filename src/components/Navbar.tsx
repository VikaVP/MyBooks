import Logo from '../assets/images/book.png'

const NavBar = () => {
    return   (
        <header>
            <nav className="navbar">
                <a href="#home" id="logo" >
                    <img src={Logo} alt="MyBooks" height="70px"/> <h1 className="text-logo">MyBooks</h1>
                </a>
            </nav>
        </header>
    )
};

export default NavBar;