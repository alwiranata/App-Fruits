import { useProduct } from "../hooks/useProduct";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Product1 = () => {
    const { product, handleDecrement, handleIncrement} = useProduct();

    return ( 
        <div className="d-flex align-items-center gap-3">
            <h6>Quantity</h6>
            <button onClick={handleDecrement} className="btn btn-outline-danger">
                <FaArrowLeft size={15} />
            </button>
            <p className="m-0 fs-4 fw-bold">{product}</p>
            <button onClick={handleIncrement} className="btn btn-outline-success">
                <FaArrowRight size={15} />
            </button>
        </div>
    );
};

export default Product1;
