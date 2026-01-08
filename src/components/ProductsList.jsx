export default function ProductsList({ products, addToCart }){


    return(
        <div className="container">
            {products?.map( p => (
                <div className="card">
                    <p>{p.name}</p>
                    <p>{p.price}€</p>
                    <button onClick={() => {addToCart(p)}}>Aggiungi al Carrello</button>
                </div>
            ))}
        </div>
    )
}