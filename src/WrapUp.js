import React, { useState } from 'react'

function WrapUp({cart}){

    const totalPrice = cart.reduce( (total, element) =>{
        return total + (element.price * element.weight)
    }, 0 )    

        //State for userInfo
    const [ userInfo, setUserInfo ] = useState({name:"", pickUpDate: "", pickUpTime: "", notes: "", cart: cart, totalCost: totalPrice})





    //pickUpDate render -> next five days
    const today = new Date()
    const fiveDayArray = ["Select Date"]

    for( let i=1; i<=5; i++){
        const day = new Date(today)
        day.setDate(day.getDate() + i)
       const formattedDay =  day.toString().split(' ').splice(0,3).join(' ')
        fiveDayArray.push(formattedDay)
    }
    const renderOptions = fiveDayArray.map( day =>{
        return <option key={day} value={day}>{day}</option>
    })

    //pickUpTime render
    const pickUpTimeRender = ["Select Pick Up Time", "Morning: 10a-12p", "Evening: 4p-6p"].map(time => <option key={time} value={time}>{time}</option>)

    function handleSubmit(){
        console.log(userInfo)
        fetch('http://localhost:3000/orders',{
            method: "POST",
            headers: {
                "Content-type":"application/json",
            },
            body: JSON.stringify(userInfo)
        })
        .then(res=> res.json())
        .then(data => console.log(data))
    }
  
    return(
        <div id="wrapUp">
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
    export default WrapUp