import { useState } from "react"

type Buy = {
    price? : number
}

const useBuy = () =>{
    const [buy, setBuy] = useState(0)

    const handleBuy = (props : Buy) => {
        if (props.price) {
            setBuy(props.price);  // Menambahkan harga baru ke buy
        }
    }

    return {
        buy,
        handleBuy
    }
}