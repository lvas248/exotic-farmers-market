import SearchFilter from "./SearchFilter.js"
import ProduceCard from "./ProduceCard.js"
import React, { useState } from 'react'

function Shop({produceList, handleSelectionClick}){
        
  
    const [ search, setSearch ] = useState("")
    const [ alphabetizeClick, setAlphabetizeClick ] = useState(false)
    const [ type, setType ] = useState("")


    //Callback functions --> SearchFilter component
    function handleSearchTextChange(searchText){
        setSearch(searchText)
    }

    function handleBtnClick(){
        setAlphabetizeClick(!alphabetizeClick)
    }

    function handleTypeChange(e){
        setType(e.target.value)
    }

    //Sort functions based on user selections
    function aToZ(array){
        array.sort( (a,b) => {
            if(a.name > b.name) return 1
            if(a.name < b.name) return -1
            else return 0
        })
    }

    function zToA(array){
        array.sort( (a,b) => {
            if(a.name < b.name) return 1
            if(a.name > b.name) return -1
            else return 0
        })
    }

    //Filters    
    const produceFilteredBySearchText = produceList.filter( produceItem => {
        return produceItem.name.toLowerCase().includes(search.toLowerCase())
    })
    

    alphabetizeClick === false ? aToZ(produceFilteredBySearchText) : zToA(produceFilteredBySearchText)

      
  
    const produceListFilteredByType = produceFilteredBySearchText.filter( produceItem =>{
        return produceItem.type.includes(type)
    })

    //Render Produce Cards
    const renderProduce = produceListFilteredByType.map( produceObj=>{
        return <ProduceCard key={produceObj.id} handleSelectionClick={handleSelectionClick} produceObj={produceObj}/>
    })



    return (
        <div id="shop">
            <h2>Shop Our Produce</h2>
            <SearchFilter type={type} handleTypeChange={handleTypeChange} alphabetizeClick={alphabetizeClick} handleBtnClick={handleBtnClick} search={search} handleSearchTextChange={handleSearchTextChange}/>
            <div id="rendPro">
                {renderProduce}
            </div>
        </div>
    )
}
export default Shop