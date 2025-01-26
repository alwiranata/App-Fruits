import Card from "../components/Card"

const Product = () => {
    return (
        <>
            <div className="row" >
                <div className=" p-2 col-4" ><Card name="Durian" src="/durian.jpg" price={20000}/></div>
                <div className=" p-2 col-4"><Card name="Banana"/></div>
                <div className=" p-2 col-4"><Card name="Apple"/></div>
                <div className=" p-2 col-4"><Card name="Watermelon"/></div>
                <div className=" p-2 col-4"><Card name="Strawbery"/></div>
                <div className=" p-2 col-4"><Card name="Blueberry"/></div>
                <div className=" p-2 col-4"><Card name="Cherry"/></div>
                <div className=" p-2 col-4"><Card name="Papaya"/></div>
                <div className=" p-2 col-4"><Card name="Mango"/></div>
                <div className=" p-2 col-4"><Card /></div>

            </div>
        </>
    )
}

export default Product