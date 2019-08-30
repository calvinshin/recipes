import React, { Component } from "react";

class Home extends Component {
    render() {
        return(
            <form>
                Title
                <br />
                <input type="text" name="title" />

                <p />

                Ingredients
                <br />
                <input type="textarea" name="ingredients" />

                <p />

                Steps
                <br />
                <input type="textarea" name="steps" />

                <p />

                Source
                <br />
                <input type="text" name="source" />

            </form>
        )
    }
}

export default Home;