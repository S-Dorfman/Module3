const React = require('react')

function Index(props) {
const {veggies} = props;
console.log(veggies);

    return(

        <div>
            <h1>Index Page</h1>
            <nav>
            <a href="/veggies/new">Add another Fruit</a>
            </nav>
            <ul>
                {veggies.map((fruit, i) => {
                    return (
                        <li key={fruit._id}>
                            The <a href={`/veggies/${fruit._id}`}>{fruit.name}</a>
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