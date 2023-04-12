
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
            <img src="https://images.unsplash.com/photo-1513977055326-8ae6272d90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
        </div>
    )
}

 module.exports = Show;