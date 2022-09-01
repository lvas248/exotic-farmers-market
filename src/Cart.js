import CartItem from "./CartItem"
import { useHistory } from "react-router-dom"

function Cart({cart, updateCart}){

 

    const totalWeight = cart.reduce((total, item) => {
        return total + parseInt(item.weight)
    }, 0)

    const totalCost = cart.reduce((total, item)=>{
        return total + (item.weight * item.price)
    }, 0)

//When Continue button clicked, redirect to Shop Component    
    const history = useHistory()
    function continueShopping(){
        history.push('/')
    }

//When button is clicked, redirect to WrapUp Component
    const wrapHistory = useHistory()
    function handleWrapUp(){
        wrapHistory.push('/wrap-up')
    }

    //RenderLineItems
    const renderLineItems = cart.map( item =>{
        return <CartItem key={item.name} updateCart={updateCart} lineItem={item}/>
    })

    const table = (
        <table id="table">
        <thead id="head">
            <tr>
                <th className="fruitName">Name</th>
                <th>Cost / lb</th>
                <th>Weight</th>
                <th>Total</th> 
            </tr>
        </thead>
        <tbody>
            {renderLineItems}
            <tr>
                <th></th>
                <th></th>
                <th className="total">Total weight</th>
                <th className="total">Total Cost</th>
            </tr>  
            <tr>
                <td></td>
                <td></td>
                <td>{totalWeight} lbs</td>
                <td>${totalCost}.00</td>
            </tr>                       
        </tbody>
    </table>
    )
  return (
        <div id="cart">
             <h2>Shopping Cart</h2>
            {cart.length > 0? table: <p>Shopping Cart is empty</p>}
            <button onClick={continueShopping}>Continue Shopping</button>
            <button onClick={handleWrapUp}>Wrap Up</button>
        </div>
    )
}
export default Cart