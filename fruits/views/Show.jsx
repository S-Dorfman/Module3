
const React = require('react')


function Show(props) {
    const {fruit} = props;
    console.log(fruit);

    return (
        <div>
            <h1>Show Page</h1>
            <p>The {fruit.name} is {fruit.color} {" "} 
            {fruit.readyToEat ? 
            `It is ready to eat! Bon Apetit!`: 
            `It is not ready to eat..have patience!`}
            </p>
            <a href="/fruits">Back to Home Page</a>
        </div>
    )
}

// class Show extends React.Component {
//    render () {
//     return (
//       <h1> Show Route </h1>
//      );
//     }
//  }
 module.exports = Show;