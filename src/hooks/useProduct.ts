import { useState } from "react"

export const useProdut =() =>{
    const [product , setProduct] = useState(0)

    const handleIncrement = () =>{
        
        setProduct(product + 1)
    }

    const handleDecrement = () =>{
        setProduct(product - 1)
    }

    return {
        product,
        handleIncrement,
        handleDecrement
    }
}
