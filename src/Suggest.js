import SuggestedProduceCard from "./SuggestedProduceCard"
import React, { useEffect, useState } from 'react'

function Suggest(){

    //Fetch Suggested Fruit Data, set state
    const [ suggestedFruitList, setSuggestedFruitList ] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/suggestions')
        .then(res => res.json())
        .then( data => setSuggestedFruitList(data))
      }, []) 

    const [ userSubmittedObj, setUserSubmittedObj ] = useState({})
    const [ suggestBtnClick, setSuggestBtnClick ] = useState(false)

    function updateSuggestions(updatedSuggestion){
        const updatedList = suggestedFruitList.map(sug => {
            if(sug.id === updatedSuggestion.id) return updatedSuggestion
            else return sug
        })
        setSuggestedFruitList(updatedList)
      }


      function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/suggestions',{
            method: "POST",
            headers: {
                "Content-type":"application/json",
            },
            body: JSON.stringify(userSubmittedObj)
        })
        .then(res => res.json())
        .then( data => setSuggestedFruitList([...suggestedFruitList, data]))
        setSuggestBtnClick(!suggestBtnClick)
    }

      const renderSuggestions = suggestedFruitList.map( suggestedFruit => {
        return <SuggestedProduceCard key={suggestedFruit.id} updateSuggestions={updateSuggestions} git add={suggestedFruit}/>
    })
      const renderDiv = (
        <div>
            <p>Want to suggest a fruit? </p>
            <button onClick={()=>setSuggestBtnClick(!suggestBtnClick)}>Click Here</button>
        </div>)
      const renderForm = (
        <form id="suggestionForm" type="submit" onSubmit={handleSubmit}>
            <input value={userSubmittedObj.name} onChange={(e)=>setUserSubmittedObj({...userSubmittedObj, name: e.target.value})} placeholder="Produce Name..."/>
            <input value={userSubmittedObj.image} onChange={(e)=>setUserSubmittedObj({...userSubmittedObj, image: e.target.value})} placeholder="Image URL..."/>
            <input value={userSubmittedObj.desc} onChange={(e)=>setUserSubmittedObj({...userSubmittedObj, desc: e.target.value})} placeholder="Description..."/>
            <button type="submit">Submit</button>
        </form>
      )

    return (
        <div id="suggest">
              <h2>User Suggested Fruits</h2>

            {suggestBtnClick ? renderForm : renderDiv}
          
            <div id="suggestionContainer">
                {renderSuggestions}
            </div>
        </div>
    )
}
export default Suggest