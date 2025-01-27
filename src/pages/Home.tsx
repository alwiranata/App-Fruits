import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAppleAlt, FaLeaf, FaTruck, FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Bagian Kiri - Gambar */}
                <div className="col-md-6 text-center">
                    <img 
                        src="/fruit.png" 
                        alt="Fresh Fruits" 
                        className="img-fluid rounded shadow-lg"
                    />
                </div>

                {/* Bagian Kanan - Konten */}
                <div className="col-md-6">
                    <h1 className="display-4 fw-bold text-secondary-emphasis">
                        Fresh & Organic <span className="text-warning">Fruits</span> For You 🍎
                    </h1>
                    <p className="lead text-muted">
                        Explore our wide selection of fresh, organic fruits sourced directly from farms. 
                        Healthy, delicious, and delivered to your doorstep!
                    </p>

                    <div className="d-flex flex-wrap gap-4 mt-4">
                        <div className="d-flex align-items-center gap-3">
                            <FaAppleAlt size={50} className="text-danger" />
                            <div>
                                <h5 className="mb-0 fw-bold">100% Organic</h5>
                                <p className="text-muted">Fresh & pesticide-free</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <FaTruck size={50} className="text-primary" />
                            <div>
                                <h5 className="mb-0 fw-bold">Fast Delivery</h5>
                                <p className="text-muted">Within 24 hours</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <FaLeaf size={50} className="text-success" />
                            <div>
                                <h5 className="mb-0 fw-bold">Eco-Friendly</h5>
                                <p className="text-muted">Sustainable packaging</p>
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/product" 
                        className="btn btn-primary btn-lg mt-4 shadow-sm d-flex align-items-center"
                    >
                        Shop Now <FaShoppingBasket className="ms-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
