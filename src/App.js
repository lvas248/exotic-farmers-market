
import './App.css';
import Nav from "./Nav"
import Shop from "./Shop.js"
import AddProduce from "./AddProduce.js"
import Cart from "./Cart"
import ProduceDisplayPage from "./ProduceDisplayPage"
import WrapUp from "./WrapUp.js"
import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'


function App() {

  const [ selectedProduceItem, setSelectedProduceItem ] = useState({})
  function handleSelectionClick(produceItem){
      setSelectedProduceItem(produceItem)
  }

  // callback function sent to productDisplayPage -> update state (cart)
  const [ cart, setCart ] = useState([])
  
  function addToCart(orderObj){
      const inCart = cart.find(item => item.name === orderObj.name)
  //check to see if item is already in cart
  if(inCart){
    //if already in cart, update quantity
    const newWeight = inCart.weight + orderObj.weight
    const updatedObj = {...orderObj, weight: newWeight}
    const updatedCart = cart.map( item => {
      if(item.name === orderObj.name) return updatedObj
      else return item 
    })
    setCart(updatedCart)
  }
  //if not in cart, add to cart
  else setCart([...cart, orderObj])
  }

  function updateCart(obj){
      const updatedCart = cart.map( item =>{
        if( item.name === obj.name) return obj
        else return item
      })
      setCart(updatedCart)
  }
  function clearCart(){
      setCart([])
  }



  return (
    <div id="app">
      <h1>Exotic Farmers Market</h1>
      <Nav />
      <div id="displaySection">

<Switch>

    <Route exact path="/">
        <Shop handleSelectionClick={handleSelectionClick}/>
    </Route>

    <Route path="/add-produce">
        <AddProduce />
    </Route>

    <Route path="/cart">
        <Cart cart={cart} updateCart={updateCart}/>
    </Route>

    <Route path="/produce-display-page/:produceName">
        <ProduceDisplayPage selectedProduceItem={selectedProduceItem} addToCart={addToCart}/>
    </Route>

    <Route path="/wrap-up">
        <WrapUp cart={cart} clearCart={clearCart}/>
    </Route>

</Switch>
</div>
    </div>
  );
}

export default App;
