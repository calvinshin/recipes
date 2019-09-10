import React from "react"

function SearchBar({search}) {
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
    </form>
    )
}

export default SearchBar;