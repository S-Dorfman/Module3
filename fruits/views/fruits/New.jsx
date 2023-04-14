const React = require('react');
const DefaultLayout = require('../layout/Default');

function New() {
    return(
        <DefaultLayout title="Add New Fruit">
            {/* <h1>New Fruit Page</h1> */}

            <form action="/fruits" method="POST"> 
                Name: <br />
                <input type="text" name="name" />
                <br />
                <br />
                Color: <br />
                <input type="text" name="color"/>
                <br />
                <br />
                Is Ready to Eat:
                <input type="checkbox"  name="readyToEat" />
                <br />
                <br />
                <input type="submit" value="Create Fruit" />
            </form>
        </DefaultLayout>
    )
}

module.exports = New;
