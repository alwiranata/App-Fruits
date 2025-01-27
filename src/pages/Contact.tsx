import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Kolom Gambar */}
                <div className="col-md-5 text-center">
                    <img
                        src="/fruit.png"
                        alt="Contact Us"
                        className="img-fluid rounded shadow-lg"
                        style={{ maxWidth: "100%" }}
                    />
                </div>

                {/* Kolom Informasi Kontak */}
                <div className="col-md-7">
                    <div className="contact-info ps-md-4">
                        <h2 className="display-5 fw-bold text-success mb-3">Contact Us</h2>
                        <p className="text-muted">
                            For questions and suggestions about our services, please fill out the form below.
                        </p>
                        <p className="text-muted">
                            Responses to enquiries and suggestions will be processed as soon as possible on working days: 
                            Monday - Friday 9:00 - 18:00.
                        </p>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <FaEnvelope className="text-success me-2" />
                                aldowiranata16@gmail.com
                            </li>
                            <li className="mb-3">
                                <FaPhoneAlt className="text-success me-2" />
                                 +62 895 6348 89510
                            </li>
                            <li className="mb-3">
                                <FaMapMarkerAlt className="text-success me-2" />
                                 Jl. Kesuma No. 24, Pekanbaru
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Form Kontak */}
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-bold text-success">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold text-success">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label fw-bold text-success">Message</label>
                            <textarea className="form-control" id="message" placeholder="Write your message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
