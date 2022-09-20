import React, { useState } from 'react'

function CartItem({lineItem, updateCart, deleteFromCart}){

//Edit Button state & functionality
    const [ btnClick, setBtnClick ] = useState(false)

    function handleEdit(){
        setBtnClick(!btnClick)
    }
    //controlled form for user edits
    const [ updatedWeight, setUpdatedWeight ] = useState(lineItem.weight)

    function handleChange(e){
        setUpdatedWeight(e.target.value)
    }

    function handleUpdate(){
        const updatedObj = {...lineItem, weight: updatedWeight}
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
                {btnClick ? <td><button onClick={()=>deleteFromCart(lineItem)}>Delete</button></td> : null}

            </tr>
        </>
    )
}
export default CartItem