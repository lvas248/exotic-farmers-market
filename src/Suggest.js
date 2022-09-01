// import SuggestedProduceCard from "./SuggestedProduceCard"
import React, { useEffect, useState } from 'react'

function Suggest(){

    //Fetch Suggested Fruit Data, set state
    const [ suggestedFruitList, setSuggestedFruitList ] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/suggestions')
        .then(res => res.json())
        .then( data => setSuggestedFruitList(data))
      }, []) 

      

    return (
        <div id="suggest">
            Suggest
        </div>
    )
}
export default Suggest