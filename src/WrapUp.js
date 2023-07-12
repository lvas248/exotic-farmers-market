import React, { useState } from 'react'
import WrapForm from "./WrapForm"
import Confirmation from "./Confirmation"

function WrapUp({cart, clearCart}){

    const [submitClick, setSubmitClick ] = useState(false)
    const [ orderDetails, setOrderDetails ] = useState({})

    function handleSetOrderDetails(obj){
        setOrderDetails(obj)
        setSubmitClick(!submitClick)
    }
  
    return(
        <div id="wrapUp">
            {submitClick === false ? <WrapForm cart={cart} clearCart={clearCart} handleSetOrderDetails={handleSetOrderDetails} /> : <Confirmation orderDetails={orderDetails}/>}
        </div>
    )
}
    export default WrapUp