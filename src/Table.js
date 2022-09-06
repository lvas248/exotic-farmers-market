import CartItem from "./CartItem"

function Table({updateCart, cart}){
    

    const totalWeight = cart.reduce((total, item) => {
        return total + parseInt(item.weight)
    }, 0)

    const totalCost = cart.reduce((total, item)=>{
        return total + (item.weight * item.price)
    }, 0)

    const renderCartItems = cart.map( item =>{
        return <CartItem key={item.name} updateCart={updateCart} lineItem={item}/>
    })

    return(
    <table id="table">
        <thead id="head">
            <tr>
                <th className="fruitName">Name</th>
                <th>Cost / lb</th>
                <th>Weight</th>
                <th>Total</th> 
            </tr>
        </thead>
        <tbody>
            {renderCartItems}
            <tr>
                <th></th>
                <th></th>
                <th className="total">Total weight</th>
                <th className="total">Total Cost</th>
            </tr>  
            <tr>
                <td></td>
                <td></td>
                <td>{totalWeight} lbs</td>
                <td>${totalCost}.00</td>
            </tr>                       
        </tbody>
    </table>
    )
}

export default Table