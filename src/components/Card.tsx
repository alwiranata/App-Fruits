type CardProps ={
    src? :string, 
    name? : string
    price? : number
    view? : string
}

const Card = (props : CardProps) => {

    const {
        src = "Not File",
        name = "Fruit",
        price = 0,
        view = "View"
    
    } = props

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={src} className="card-img-top" alt="Not File"/>
                <div className="card-body">
                    <h5 className="card-title">Fruit : {name}</h5>
                    <h5 className=" card-title">Price : Rp.{price}</h5>
                    <a href="#" className="btn btn-primary">{view}</a>
                </div>
        </div>
    )
}

export default Card