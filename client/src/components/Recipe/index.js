import React from "react"

function Recipe({test}) {
    return(
        <form id="recipe">
        Title
        <br />
        {/* The value of this.state.test doesn't need to exist due to the ternary expression */}
        <input type="text" name="title" value={test ? test : ""}/>
    
        <p />
    
        Ingredients
        <br />
        <textarea name="ingredients" form="recipe" />
    
        <p />
    
        Steps
        <br />
        <textarea name="steps" form="recipe" />
    
        <p />
    
        Source
        <br />
        <input type="text" name="source" />
    
        <p />
    
        Tags
        <br />
        <textarea name="tags" form="recipe" />
    
    </form>
    )
}

export default Recipe;