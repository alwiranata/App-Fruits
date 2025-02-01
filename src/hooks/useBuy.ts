import { useState } from "react"

type Buy = {
    price? : number
    quantity? : number
}

export const useBuy = () =>{
    const [buy, setBuy] = useState(0)

    const handleBuy = (props : Buy) => {
        if (props.price && props.quantity) {
            setBuy(props.price * props.quantity);  // Menambahkan harga baru ke buy
        }
    }

    return {
        buy,
        handleBuy
    }
}

