import { useSearchParams, useNavigate } from "react-router";
import { products, ProductType } from "../data/product";

const ProductDetail = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const productName = searchParams.get("name") || "";
    const product: ProductType | undefined = products.find((p) => p.name.toLowerCase() === productName.toLowerCase());

    const handleBuy = () => {
        if (product) {
            alert(`🎉 Thank you for purchasing ${product.name}!`);
        }
    };

    return (
        <div className="container py-5">
            {product ? (
                <div className="row align-items-center">
                    {/* Kolom Gambar */}
                    <div className="col-md-5 text-center">
                        <img
                            src={product.src}
                            alt={product.name}
                            className="img-fluid rounded shadow-lg"
                            style={{ maxWidth: "100%", height: "350px", objectFit: "cover" }}
                        />
                    </div>

                    {/* Kolom Informasi Produk */}
                    <div className="col-md-7">
                        <div className="product-info ps-md-4">
                            <h2 className="display-5 fw-bold text-success mb-3">{product.name}</h2>
                            <p className="text-muted">{product.description}</p>
                            <p className="fw-bold fs-4 text-success">Rp {product.price.toLocaleString()}</p>
                            <div className="mt-4">
                                <button 
                                    onClick={handleBuy} 
                                    className="btn btn-success w-100 fw-bold shadow-sm"
                                >
                                    🛍️ Buy Now
                                </button>
                                <button 
                                    onClick={() => navigate(-1)} 
                                    className="btn btn-outline-secondary w-100 mt-2 shadow-sm"
                                >
                                    ⬅️ Back to Products
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center mt-4">
                    <h4 className="text-danger fw-bold">🚫 Product Not Found!</h4>
                    <p className="text-muted">Sorry, the product you're looking for doesn't exist.</p>
                    <button 
                        onClick={() => navigate(-1)} 
                        className="btn btn-primary shadow-sm fw-bold"
                    >
                        ⬅️ Back to Products
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
