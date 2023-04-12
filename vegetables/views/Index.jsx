const React = require('react')

function Index(props) {
const {veggies} = props;
console.log(veggies);

    return(

        <div>
            <h1>Index Page</h1>
            {/* <nav>
            <a href="/veggies/new">Add another Veggie</a>
            </nav> */}
            {/* <ul>
                {veggies.map((veggie, i) => {
                    return (
                        <li key={veggie._id}>
                            The <a href={`/veggies/${veggie._id}`}>{veggie.name}</a>
                            {' '}is {veggie.color}{'. '}
                            {veggie.readyToEat
                            ? `It is ready to eat`
                            : `It is not ready to eat`}{'.'}
                        </li>
                    )
                })}
            </ul> */}
            
        </div>
    )
}

module.exports = Index; 