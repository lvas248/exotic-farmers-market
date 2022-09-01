import React, { useState } from 'react'

function WrapUp({cart}){
    
    const [ userInfo, setUserInfo ] = useState({name:"", pickUpDate: "", pickUpTime: "", notes: "", cart: cart, totalCost:""})

  
    return(
        <div id="wrapUp">
            <h1>Pick Up Details</h1>
            <form type="submit">
                <div>
                    <label>Name: </label>
                    <input type="text" value={userInfo.name} onChange={e => setUserInfo({...userInfo, name: e.target.value})}></input>
                </div>
                <div>
                    <label>Pick Up Date</label>
                    <select>
                        {/* {renderOptions}                         */}
                    </select>
                </div>
                <div>
                <label>Pick up time</label>  
                    <select value={userInfo.pickUpTime} onChange={e => setUserInfo({...userInfo, pickUpTime: e.target.value})}>
                        <option>Morning: 10a-12p</option>
                        <option>Evening: 4p-6p</option>
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