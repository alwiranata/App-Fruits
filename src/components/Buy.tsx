import { useBuy } from "../hooks/useBuy";
import { useNavigate } from "react-router";
import { useProduct } from "../hooks/useProduct";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Buy = ({ price }: { price: number }) => {
    const navigate = useNavigate()
    const { buy, handleBuy } = useBuy();
    const {handleDecrement ,handleIncrement ,quantity} = useProduct()

    return (
        <div>
            <div className="d-flex align-items-center gap-3">
                <h6>Quantity</h6>
                <button onClick={handleDecrement} className="btn btn-outline-danger">
                    <FaArrowLeft size={15} />
                </button>
                <p className="m-0 fs-4 fw-bold">{quantity}</p>
                <button onClick={handleIncrement} className="btn btn-outline-success">
                    <FaArrowRight size={15} />
                </button>
            </div>

            <div className="mt-4">
                <button
                    className="btn btn-primary text-light w-100 fw-bold shadow-sm"
                    onClick={() => handleBuy({ price, quantity })}
                >
                    Buy Now
                </button>
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-outline-secondary w-100 mt-2 shadow-sm"
                >
                    Back to Products
                </button>
            </div>
            <h5 className="mt-3">Total: Rp {buy.toLocaleString()}</h5>
        </div>
    );
};

export default Buy;
