import { Link, useLocation } from "react-router";

const Navbar = () => {
    const location = useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary fixed-top sticky-top">
                <div className="container-fluid">
                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                        <img src="/fruit.png" alt="Not File" width="30" height="24" />
                    </a>
                    
                    {/* Button Toggle for Mobile View */}
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${location.pathname === "/" ? "text-warning fw-bold" : ""}`} 
                                    to="/"
                                >
                                    Welcome
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${location.pathname === "/product" ? "text-warning fw-bold" : ""}`} 
                                    to="/product"
                                >
                                    Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${location.pathname === "/about" ? "text-warning fw-bold" : ""}`} 
                                    to="/about"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${location.pathname === "/contact" ? "text-warning fw-bold" : ""}`} 
                                    to="/contact"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        {/* Tombol Login Paling Kanan */}
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button className="btn btn-outline-warning text-secondary-emphasis" type="submit">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
