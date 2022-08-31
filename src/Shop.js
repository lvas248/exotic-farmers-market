// import SearchFilter from "./SearchFilter.js"
import ProduceCard from "./ProduceCard.js"
import React, { useState, useEffect } from 'react'

function Shop(){

    //Initialize State -- ProduceList
    const[ produceList, setProduceList ] = useState([])
    //Get request - set state to data
    useEffect(()=>{
        fetch('http://localhost:8000/produce')
        .then(res => res.json())
        .then(data => setProduceList(data))
    },[])


    const renderProduce = produceList.map( produceObj=>{
        return <ProduceCard key={produceObj.id} produceObj={produceObj}/>
    })
    return (
        <div id="shop">
            Shop
            {renderProduce}
        </div>
    )
}
export default Shop