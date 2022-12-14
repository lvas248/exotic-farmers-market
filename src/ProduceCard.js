import { Link } from 'react-router-dom'

function ProduceCard({produceObj, handleSelectionClick}){
    return (
        <Link style={{textDecoration:"none"}} to={`/produce-display-page/${produceObj.name}`}>
            <div id="produceCard" onClick={()=> handleSelectionClick(produceObj)}>
                <img src={produceObj.image} alt={produceObj.name}/>
                <h4>{produceObj.name}</h4>
                <p>${produceObj.price} per pound</p>
            </div>
        </Link>
    )
}

export default ProduceCard