const React = require('react');

function New() {
    return(
        <div>
            <h1>Add a Veggie Page</h1>

            <form action="/veggies" method="POST"> 
                Name: <input type="text" name="name" />
                <br />
                Color: <input type="text" name="color"/>
                <br />
                Is Ready to Eat: <input type="checkbox"  name="readyToEat" />
                <br />
                <input type="submit" value="Create Veggie" />
            </form>
        </div>
    )
}

module.exports = New;