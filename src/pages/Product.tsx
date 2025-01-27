import Card from "../components/Card"

const Product = () => {
    return (
        <>
            <div className="row" >
                <div className=" p-2 col-4" ><Card name="Durian" src="/durian.png" price={20000}/></div>
                <div className=" p-2 col-4"><Card name="Banana" src="/banana.png" price={10000} /></div>
                <div className=" p-2 col-4"><Card name="Apple"price={12000} src="/apple.png"/></div>
                <div className=" p-2 col-4"><Card name="Watermelon" price={8000} src="/watermelon.png"/></div>
                <div className=" p-2 col-4"><Card name="Strawbery" price={25000} src="/strawberry.png"/></div>
                <div className=" p-2 col-4"><Card name="Blueberry" price={30000} src="/bluebey.png"/></div>
            </div>
        </>
    )
}

export default Product