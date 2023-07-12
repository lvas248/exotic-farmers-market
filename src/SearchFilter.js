

function SearchFilter ({type, handleTypeChange, search, handleSearchTextChange, alphabetizeClick, handleBtnClick }) {

    return (
    <form id="search">
        <button id="btn" type='button' onClick={handleBtnClick}>{alphabetizeClick === false ? "A → Z" : "Z → A"}</button>
        <input id="searchBar" type="text" placeholder="search fruits and veggies..." value={search} onChange={(e)=> handleSearchTextChange(e.target.value)} />
        <label>Filter by type:</label>
        <select value={type} onChange={handleTypeChange}>
            <option value="">All</option>
            <option value="fruit">Fruits</option>
            <option value="veggie">Veggies</option>
        </select>
    </form>
    )
}

export default SearchFilter