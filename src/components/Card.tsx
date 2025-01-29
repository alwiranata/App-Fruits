import { useCard } from "../hooks/useCard"

type CardProps = {
    src?: string,
    name?: string
    view?: string
}

const Card = (props: CardProps) => {
    
    const {
        src = "Not File",
        name = "Fruit",
        view = "View"
    } = props

    const {handleClick} = useCard({view})

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={src} className="card-img-top img-fluid" style={{ height: "350px", objectFit: "cover" }} alt="Not File" />
            <div className="card-body">
                <h5 className="card-title fw-bold text-secondary-emphasis">Fruit: {name}</h5>
                <div className="mt-auto">
                    <button onClick={handleClick} className="btn btn-primary w-100">{view}</button>
                </div>
            </div>
        </div>

    )
}

export default Card