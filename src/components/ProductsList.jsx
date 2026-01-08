export default function ProductsList({ products, addToCart, addedProducts }) {


    return (
        <div className="container">
            {products?.map(p => (
                <div className="card">
                    <p>{p.name}</p>
                    <p>{p.price}€</p>
                    <button onClick={() => { addToCart(p) }}>Aggiungi al Carrello</button>
                </div>
            ))}
            <div className="cart">
                <h3>Prodotti nel carrello:</h3>
                <ul>
                    {addedProducts.map(p => (
                        <div className="card">
                            <li>{p.name} {p.price}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}