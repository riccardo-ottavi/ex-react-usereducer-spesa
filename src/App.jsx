import './App.css'
import ProductsList from './components/ProductsList';

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  return (
    <>
      <h1>Prova</h1>
      <ProductsList
        products={products}
      />
    </>
  )
}

export default App
