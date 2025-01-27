const Footer = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid ms-5">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <p className="">&copy; {new Date().getFullYear()} Aldo Wiranata. All Rights Reserved.</p> 
                    </div>
                </div>
            </nav>
        </>  
    )
}

export default Footer