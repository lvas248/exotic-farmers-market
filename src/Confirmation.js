

function Confirmation({orderDetails}){
    return (
    <div id="confirmation">
        <h1>Confirmation Details</h1>
        <p>Confirmation number: <strong>{orderDetails.id}</strong></p>
        <p>Name: <strong>{orderDetails.name}</strong></p>
        <p>Pick up date: <strong>{orderDetails.pickUpDate}</strong></p>
        <p>Pick up time: <strong>{orderDetails.pickUpTime}</strong></p>
        <p>Price: <strong>${orderDetails.totalCost}.00</strong></p>
        <p>Notes: {orderDetails.notes}</p>
    </div>
    )
}

export default Confirmation