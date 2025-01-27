type CardProps = {
    src?: string,
    name?: string
    price?: number
    view?: string
}

const Card = (props: CardProps) => {

    const {
        src = "Not File",
        name = "Fruit",
        price = 0,
        view = "View"

    } = props

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={src} className="card-img-top img-fluid" style={{ height: "350px", objectFit: "cover" }} alt="Not File" />
            <div className="card-body">
                <h5 className="card-title fw-bold text-secondary-emphasis">Fruit: {name}</h5>
                <div className="mt-auto">
                    <a href="#" className="btn btn-primary w-100">{view}</a>
                </div>
            </div>
        </div>

    )
}

export default Card