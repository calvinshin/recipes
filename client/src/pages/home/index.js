import React, { Component } from "react";
import Recipe from "../../components/Recipe"

// Alternative would be to create a component that is like a click to add, which would work for tags, ingredients, and steps.

class Home extends Component {
    state = {
        recipe: {"ingredients":["1 tablespoon olive oil","1 teaspoon butter","1 small onion, chopped","2 cloves garlic, minced","4 cups peeled and cubed yellow squash","1 teaspoon kosher salt","1/2 teaspoon freshly ground black pepper","1/3 cup finely chopped raw almonds","1 cup shredded Colby-Monterey Jack cheese, divided","1/2 cup heavy whipping cream","2 eggs","1/3 cup coarsely chopped roasted, salted almonds"],"steps":["Preheat oven to 400 degrees F (200 degrees C).","Heat olive oil and butter in a skillet over medium-high heat; cook and stir onion and garlic in the hot oil-butter mixture until softened, about 3 minutes. Add squash, salt, and pepper; stir to combine. Cover skillet and cook, stirring occasionally, until squash is softened, about 5 minutes. Transfer squash mixture to a large bowl.","Mix raw almonds and 1/2 cup Colby-Monterey Jack cheese together in a bowl; stir into squash mixture. Whisk cream and eggs together in a measuring cup or small bowl; stir into squash mixture. Pour squash mixture into a 9x13-inch casserole dish; top with remaining Colby-Monterey Jack cheese and roasted almonds.","Bake in the preheated oven until casserole is golden brown and bubbling, 25 to 30 minutes."],"source":"https://www.allrecipes.com/recipe/233448/low-carb-yellow-squash-casserole/","title":"Low Carb Yellow Squash Casserole"},
        test: "test text"
    }
    render() {
        return(
            // The value of this.state.test doesn't need to exist due to the ternary expression
            <Recipe recipe={this.state.recipe}/>
        )
    }
}

export default Home;