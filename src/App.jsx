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
    if (!addedProducts.some((p) => {
      return p.name === product.name
    })) {
      setAddedProducts(curr => [
        ...curr,
        { ...product, quantity: 1 }
      ])
    } else {
      updateProductQuantity(product)
    }
  }

  function removeToCart(product){
    const filteredProducts = addedProducts.filter( p => p.name !== product.name);
    setAddedProducts(filteredProducts)
  }

  function updateProductQuantity(product) {
    setAddedProducts(curr =>
      curr.map(p =>
        p.name === product.name
          ? { ...p, quantity: p.quantity + 1 }
          : p
      )
    )
  }

  return (
    <>
      <h1>Prova</h1>
      <ProductsList
        addToCart={addToCart}
        products={products}
        addedProducts={addedProducts}
        removeToCart={removeToCart}
      />
    </>
  )
}

export default App
