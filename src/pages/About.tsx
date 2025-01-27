import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLeaf, FaAward, FaSmile, FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router';

const About = () => {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Bagian Kiri - Gambar */}
                <div className="col-md-6 text-center">
                    <img 
                        src="/fruit.png" 
                        alt="About Us" 
                        className="img-fluid rounded shadow-lg"
                    />
                </div>

                {/* Bagian Kanan - Konten */}
                <div className="col-md-6">
                    <h2 className="display-5 fw-bold text-secondary-emphasis mb-3">About Us</h2>
                    <p className="lead text-muted">
                        We are committed to delivering high-quality products and services that meet 
                        our customers' needs. Our team is dedicated to innovation, excellence, and 
                        providing a great experience.
                    </p>

                    <div className="mt-4">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <FaLeaf size={40} className="text-success" />
                            <div>
                                <h5 className="mb-0 fw-bold">Eco-Friendly</h5>
                                <p className="text-muted">Sustainable business practices</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-3 mb-3">
                            <FaAward size={40} className="text-danger" />
                            <div>
                                <h5 className="mb-0 fw-bold">Award-Winning Service</h5>
                                <p className="text-muted">Recognized for excellence</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-3 mb-3">
                            <FaSmile size={40} className="text-warning" />
                            <div>
                                <h5 className="mb-0 fw-bold">Customer Satisfaction</h5>
                                <p className="text-muted">Ensuring happiness and trust</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <FaHandsHelping size={40} className="text-info" />
                            <div>
                                <h5 className="mb-0 fw-bold">Community Support</h5>
                                <p className="text-muted">Giving back to society</p>
                            </div>
                        </div>
                    </div>

                    <Link to="/contact" className="btn btn-primary btn-lg mt-4 shadow-sm">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
