import React from "react"

function SearchBar({search, handleFormSubmit}) {
    return(
        <form id="search">
        <select>
            <option value="allrecipes">AllRecipes.com</option>
            <option value="">Other</option>
        </select>
        
        <p />
    
        Link
        <br />
        <input type="text" name="source" value={search}/>

        <br />
        <button onClick={handleFormSubmit} > Search </button>
    </form>
    )
}

export default SearchBar;