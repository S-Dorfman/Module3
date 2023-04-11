
const React = require('react')


function Show(props) {
    const {cat} = props;
    console.log(cat);

    return (
        <div>
            <h1>Show Page</h1>
            <p>The {cat.breed} is {cat.origin} {" "} 
            {cat.hypoallergenic ? 
            `It is hypoallergenic`: 
            `It is not hypoallergenic!`}
            </p>
            <nav>
            <a href="/cats">Back to Home Page</a>   
            </nav> 
        </div>
    )
}

 module.exports = Show;