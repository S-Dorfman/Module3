
const React = require('react');
const DefaultLayout = require('../layout/Default');


function Show(props) {
    const {fruit} = props;
    // console.log(fruit);

    return (
        <DefaultLayout title="Fruit Show Page" style={{}}>
            {/* <h1>Show Page</h1> */}
            <p>The {fruit.name} is {fruit.color} {" "} 
            {fruit.readyToEat ? 
            `It is ready to eat! Bon Apetit!`: 
            `It is not ready to eat..have patience!`}
            </p>
            <a href="/fruits">Back to Home Page</a>
        </DefaultLayout>
    )
}

 module.exports = Show;