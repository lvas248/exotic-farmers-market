

function WrapUp({cart}){
    


    return(
        <div id="wrapUp">
            <h1>Pick Up Details</h1>
            <form type="submit">
                <div>
                    <label>Name: </label>
                    <input type="text" ></input>
                </div>
                <div>
                    <label>Pick Up Date</label>
                    <select>
                        {/* {renderOptions}                         */}
                    </select>
                </div>
                <div>
                <label>Pick up time</label>  
                    <select>
                        <option>Morning: 10a-12p</option>
                        <option>Evening: 4p-6p</option>
                    </select>
                </div>
                <div>
                    <label>Notes: </label>
                    <input type="text" style={{width:"250px"}}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
          
        </div>
    )
}
    export default WrapUp