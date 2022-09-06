import { useHistory } from "react-router-dom"
import Table from "./Table"

function Cart({cart, updateCart}){

    const history = useHistory()

    const wrapHistory = useHistory()

    //Continue shopping button => redirects to Shop component
    function continueShopping(){
        history.push('/')
    }

    //Wrap up button => redirects to wrap up component
    function handleWrapUp(){
        wrapHistory.push('/wrap-up')
    }

  return (
        <div id="cart">
             <h2>Shopping Cart</h2>
            {cart.length > 0? <Table updateCart={updateCart} cart={cart}/>: <p>Shopping Cart is empty</p>}
            <button onClick={continueShopping}>Continue Shopping</button>
            <button onClick={handleWrapUp}>Wrap Up</button>
        </div>
    )
}
export default Cart