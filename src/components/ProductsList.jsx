export default function ProductsList({ products }){


    return(
        <div className="container">
            {products?.map( p => (
                <div className="card">
                    <p>{p.name}</p>
                    <p>{p.price}€</p>
                </div>
            ))}
        </div>
    )
}