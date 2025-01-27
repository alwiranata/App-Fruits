import { Link, useLocation } from "react-router"

const Navbar = () => {
    const location = useLocation()
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary fixed-top sticky-top">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <a className="navbar-brand" href="#">
                                <img src="/fruit.png" alt="Not File" width="30" height="24"/>
                            </a>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "text-primary" : ""}`} aria-current="page" to="/">Welcome</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/product" ? "text-primary" : ""}`} aria-current="page" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "text-primary" : ""}`} aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/contact" ? "text-primary" : ""}`} aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
