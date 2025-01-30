import { useState } from "react";

export const useProduct = () => {
    const [product, setProduct] = useState(0);

    const handleIncrement = () => {
        setProduct(product + 1);
    };

    const handleDecrement = () => {
        if (product > 0) {
            setProduct(product - 1);
        }
    };


    const handleBuy = () => {
        if (product) {
            alert(`🎉 Thank you for purchasing ${product}!`);
        }
    };

    return {
        product,
        handleIncrement,
        handleDecrement,
        handleBuy
    };
};
