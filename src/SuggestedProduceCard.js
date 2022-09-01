

function SuggestedProduceCard({updateSuggestions,suggestedFruit}){


    return (
        <div id="SuggestionCard">
            <h4>{suggestedFruit.name}</h4>
            <img src={suggestedFruit.image} alt={suggestedFruit.name}/>
            <p> Description: {suggestedFruit.desc}</p>
        </div>
    )
}
export default SuggestedProduceCard