const React = require('react')

function Index(props) {
const {fruits} = props;
console.log(fruits);

    return(

        <div>
            <h1>Index Page</h1>
            <nav>
            <a href="/fruits/new">Add another Fruit</a>
            </nav>
            <ul>
                {fruits.map((fruit, i) => {
                    return (
                        <li key={fruit._id}>
                            The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a>
                            {' '}is {fruit.color}{'. '}
                            {fruit.readyToEat
                            ? `It is ready to eat`
                            : `It is not ready to eat`}{'.'}
                        </li>
                    )
                })}
            </ul>
            
        </div>
    )
}

module.exports = Index; 