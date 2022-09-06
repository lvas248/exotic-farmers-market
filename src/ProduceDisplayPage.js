import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

function ProduceDisplayPage({selectedProduceItem, addToCart}){

   
    const [order, setOrder] = useState({name: selectedProduceItem.name, price: selectedProduceItem.price, weight: ""})
    
    const history = useHistory()
    
    function handleSubmit(e){
        e.preventDefault()
        addToCart(order)
        history.push(`/cart`)
    }

    return (
        <div id="produceDisplayPage">
            <h1>{selectedProduceItem.name}</h1>
            <img src={selectedProduceItem.image} alt={selectedProduceItem.name}/>
            <p id="desc">{selectedProduceItem.description}</p>
            <h5>${selectedProduceItem.price} per pound</h5>
      
            <form onSubmit={handleSubmit}>
                <label>Order in  lbs: </label>
                <input type="text" placeholder="qty" onChange={(e)=>setOrder({...order, weight: parseInt(e.target.value)})}/>
                <button type="submit">Add to Cart</button>
            </form>
            
        </div>
    )
}
export default ProduceDisplayPage