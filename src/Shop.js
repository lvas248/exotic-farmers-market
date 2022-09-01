import SearchFilter from "./SearchFilter.js"
import ProduceCard from "./ProduceCard.js"
import React, { useState, useEffect } from 'react'

function Shop({handleSelectionClick}){

    //Get request, State initialization for produceList
    const[ produceList, setProduceList ] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/produce')
        .then(res => res.json())
        .then(data => setProduceList(data))
    },[])


    //Search and Filter States, callback functions
        
        //User Search
    const [ search, setSearch ] = useState("")
    function handleSearchTextChange(searchText){
        setSearch(searchText)
    }
    const produceFilteredBySearchText = produceList.filter( produceItem => {
        return produceItem.name.toLowerCase().includes(search.toLowerCase())
    })


        //Alphabetize Button
    const [ alphabetizeClick, setAlphabetizeClick ] = useState(false)
    function handleBtnClick(){
        setAlphabetizeClick(!alphabetizeClick)
    }
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

    alphabetizeClick === false ? aToZ(produceFilteredBySearchText) : zToA(produceFilteredBySearchText)



        //Type: Fruit or Veggie
    const [ type, setType ] = useState("")
    function handleTypeChange(e){
        setType(e.target.value)
    }
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