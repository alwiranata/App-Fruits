import Card from "../components/Card"
import Product1 from "../components/Product"

const Product = () => {
    return (
        <>
            <div className="row" >
                
                <div className=" p-2 col-4" ><Card name="Durian" src="/durian.png" price={20000} view="durian"/></div>
                <div className=" p-2 col-4"><Card name="Banana" src="/banana.png" price={10000} view="banana"/></div>
                <div className=" p-2 col-4"><Card name="Apple"price={12000} src="/apple.png" view="apple"/></div>
                <div className=" p-2 col-4"><Card name="Watermelon" price={8000} src="/watermelon.png" view="watermelon"/></div>
                <div className=" p-2 col-4"><Card name="Strawbery" price={25000} src="/strawberry.png" view="strawberry"/></div>
                <div className=" p-2 col-4"><Card name="Blueberry" price={30000} src="/bluebey.png" view="blueberry"/></div>
            </div>
        </>
    )
}

export default Product