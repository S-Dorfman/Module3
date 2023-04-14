const React = require('react')
const DefaultLayout = require('../layout/Default')

function Index(props) {
const {fruits} = props;
console.log(fruits);

    return(

        <DefaultLayout title="Fruits Index Page">
            {/* <h1>Index Page</h1> */}
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
                        <a href={`/fruits/${fruit._id}/edit`}>Edit this fruit</a>

                            <form method="POST" action={`/fruits/${fruit._id}?_method=DELETE`}>
                                <input type="submit" value="DELETE"></input>
                            </form>
                        </li>
                    )
                })}
            </ul>


            
        </DefaultLayout>
    )
}

module.exports = Index; 