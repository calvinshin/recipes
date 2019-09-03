import React, { Component } from "react";
import Recipe from "../../components/Recipe"

// Alternative would be to create a component that is like a click to add, which would work for tags, ingredients, and steps.

class Home extends Component {
    state = {
        recipe: {},
        test: "test text"
    }
    render() {
        return(
            // The value of this.state.test doesn't need to exist due to the ternary expression
            <Recipe test={this.state.test}/>
        )
    }
}

export default Home;