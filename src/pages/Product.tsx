import Card from "../components/Card";
import { products } from "../data/product";



const Product = () => {
    return (
        <div className="row">
            {products.map((product, index) => (
                <div key={index} className="p-2 col-4">
                    <Card {...product} />
                </div>
            ))}
        </div>
    );
};

export default Product;
