import React, { useState } from 'react'

function CartItem({lineItem, updateCart}){

    const [ btnClick, setBtnClick ] = useState(false)
    function handleEdit(){
        setBtnClick(!btnClick)
    }
    
    const [ updatedWeight, setUpdatedWeight ] = useState(lineItem.weight)
    function handleChange(e){
        setUpdatedWeight(e.target.value)
    }

    function handleUpdate(){
        const updatedObj = {...lineItem, qty: updatedWeight}
        updateCart(updatedObj)
        setBtnClick(!btnClick)
    }

    return (
        <>
            <tr id="cartItem">
                <td>{lineItem.name}</td>
                <td>${lineItem.price}</td>
                <td>{btnClick? <input placeholder={lineItem.weight} value={updatedWeight} onChange={handleChange}></input>: lineItem.weight} lbs</td>
                <td>${lineItem.weight * lineItem.price}.00</td>
                <td>{btnClick ? <button onClick={handleUpdate}>Update</button> : <button onClick={handleEdit}>Edit</button>}</td>
            </tr>
        </>
    )
}
export default CartItem