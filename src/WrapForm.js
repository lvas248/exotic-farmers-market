import React, { useState } from 'react'


function WrapForm({cart, clearCart, handleSetOrderDetails}){

    const totalPrice = cart.reduce( (total, element) =>{
        return total + (element.price * element.weight)
    }, 0 )  

    const [ userInfo, setUserInfo ] = useState({name:"", pickUpDate: "", pickUpTime: "", notes: "", cart: cart, totalCost: totalPrice})

    //Create pickup date options
    const today = new Date()

    const fiveDayArray = ["Select Date"]

    for( let i=1; i<=5; i++){
        const day = new Date(today)
        day.setDate(day.getDate() + i)
       const formattedDay =  day.toString().split(' ').splice(0,3).join(' ')
        fiveDayArray.push(formattedDay)
    }
    const pickUpTimeRender = ["Select Pick Up Time", "Morning: 10a-12p", "Evening: 4p-6p"].map(time => <option key={time} value={time}>{time}</option>)

    const renderOptions = fiveDayArray.map( day =>{
        return <option key={day} value={day}>{day}</option>
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/orders',{
            method: "POST",
            headers: {
                "Content-type":"application/json",
            },
            body: JSON.stringify(userInfo)
        })
        .then(res=> res.json())
        .then(data => handleSetOrderDetails(data) 
        )
        setUserInfo({name:"", pickUpDate: "", pickUpTime: "", notes: "", cart: cart, totalCost: totalPrice})
        clearCart()
    }

    return(
        <div>
                <h1>Pick Up Details</h1>
                <form type="submit" onSubmit={handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input type="text" value={userInfo.name} onChange={e => setUserInfo({...userInfo, name: e.target.value})}></input>
                    </div>
                    <div>
                        <label>Pick Up Date</label>
                        <select value={userInfo.pickUpDate} onChange={e => setUserInfo({...userInfo, pickUpDate: e.target.value})}>
                            {renderOptions}                        
                        </select>
                    </div>
                    <div>
                    <label>Pick up time</label>  
                        <select value={userInfo.pickUpTime} onChange={e => setUserInfo({...userInfo, pickUpTime: e.target.value})}>
                            {pickUpTimeRender}
                        </select>
                    </div>
                    <div>
                        <label>Notes: </label>
                        <input type="text" style={{width:"250px"}} value={userInfo.notes} onChange={e => setUserInfo({...userInfo, notes: e.target.value})}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
    )
}

export default WrapForm