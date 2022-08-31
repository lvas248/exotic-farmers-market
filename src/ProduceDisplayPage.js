
function ProduceDisplayPage({selectedProduceItem}){

    return (
        <div id="produceDisplayPage">
            <h1>{selectedProduceItem.name}</h1>
            <img src={selectedProduceItem.image} alt={selectedProduceItem.name}/>
            <p id="desc">{selectedProduceItem.description}</p>
            <h5>${selectedProduceItem.price} per pound</h5>
            <form onSubmit={console.log("submit")}>
                <label>Order in  lbs: </label>
                <input type="text" placeholder="qty" onChange={console.log("handleChange")}/>
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    )
}
export default ProduceDisplayPage