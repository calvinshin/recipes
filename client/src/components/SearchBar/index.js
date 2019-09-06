import React from "react"

function Recipe({recipe}) {
    return(
        <form id="search">
        <select>
            <option value="allrecipes">All Recipes</option>
            <option value="">Other</option>
            <option value="">Opel</option>
            <option value="">Audi</option>
        </select>
        
        <p />
    
        Link
        <br />
        <input type="text" name="source" value={recipe.source}/>
        
    <p></p>
    <Button />

    </form>
    )
}

export default Recipe;