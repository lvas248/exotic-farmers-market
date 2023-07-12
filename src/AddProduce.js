import React, { useState } from 'react'

function AddProduce({addProduce}){

    const [ addedProduce, setAddedProduce ] = useState({name: "", type: "", price: "", image: "", description: ""})

    function handleChange(e, key){
        const copy = {...addedProduce}
        copy[key] = e.target.value
        setAddedProduce(copy)
      }
    
    function handleSubmit(e){
        e.preventDefault()   
        fetch('https://exotic-db.onrender.com/produce',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(addedProduce)
        })
        .then(res => res.json())
        .then(data => addProduce(data))
        setAddedProduce({name: "", type: "", price: "", image: "", description: ""})
    }

    return (
        <form id="addProduceForm" type="submit" onSubmit={handleSubmit}>
            <input value={addedProduce.name} onChange={(e)=> handleChange(e, 'name')} placeholder="Produce Name..."/>
            <input value={addedProduce.image} onChange={(e)=> handleChange(e, 'image')} placeholder="Image URL..."/>
            <input value={addedProduce.description} onChange={(e)=> handleChange(e, 'description')} placeholder="Description..."/>
            <input value={addedProduce.price} onChange={(e)=> handleChange(e, 'price')} placeholder="Price..."/>
            <div>
                <label>Produce Type: </label>
                <select value={addedProduce.type} onChange={(e)=> handleChange(e, 'type')}>
                    <option>Select Type</option>
                    <option>fruit</option>
                    <option>veggie</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddProduce