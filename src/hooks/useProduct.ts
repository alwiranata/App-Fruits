import { useState } from "react";

export const useProduct = () => {
    const [quantity, setProduct] = useState(0);

    const handleIncrement = () => {
        setProduct(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setProduct(quantity - 1);
        }
    };



    return {
        quantity,
        handleIncrement,
        handleDecrement,
    };
};
