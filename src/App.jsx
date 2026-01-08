import { useState } from 'react';
import './App.css'
import ProductsList from './components/ProductsList';

function App() {

  const [addedProducts, setAddedProducts] = useState([])

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];


  function addToCart(product) {
    if(!addedProducts.some((p) => {
      return p.name === product.name
    })){
      product.quantity = 1;
      setAddedProducts(curr => [...curr, product])
    }else{
      return
    } 
  }

  return (
    <>
      <h1>Prova</h1>
      <ProductsList
        addToCart={addToCart}
        products={products}
      />
    </>
  )
}

export default App
