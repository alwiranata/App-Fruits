import { useProdut } from "../hooks/useProduct"

const Product1 = () =>{

    const {product ,handleDecrement ,handleIncrement} = useProdut()

    return(
        <>
        <div> 
            <button onClick={handleIncrement}>Tambah</button>
                <p>{product}</p>
            <button onClick={handleDecrement}>Kurang</button>
        </div>

        </>
    )
}

export default Product1