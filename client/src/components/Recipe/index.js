import React from "react"
import Button from "./Button"

function Recipe({recipe}) {
    return(
        <form id="recipe">
        Title
        <br />
        {/* The value of this.state.test doesn't need to exist due to the ternary expression */}
        {/* Kidding, the ternary just doesn't have a value if it's not there... which is fine. */}
        <input type="text" name="title" value={recipe.title}/>
    
        <p />
    
        Ingredients
        <br />
        <textarea name="ingredients" form="recipe" value={recipe.ingredients} />
    
        <p />
    
        Steps
        <br />
        <textarea name="steps" form="recipe" value={recipe.steps} />
    
        <p />
    
        Source
        <br />
        <input type="text" name="source" value={recipe.source}/>
    
        <p />
    
        Tags
        <br />
        <textarea name="tags" form="recipe" value={recipe.tags} />
    
    <p></p>
    <Button />

    </form>
    )
}

export default Recipe;