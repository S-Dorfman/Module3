const React = require('react')

function Index(props) {
const {flights} = props;
console.log(flights);

    return(

        <div>
            <h1>Index Page</h1>
            <nav>
            <a href="/flights/new">Add another Flight</a>
            </nav>
            <ul>
                {flights.map((flight, i) => {
                    return (
                        <li key={flight._id}>
                            The <a href={`/flights/${flight._id}`}>{flight.airline}</a>
                            {' '}airlines{' '}flight number: {flight.flightnum}{' '}
                            departs on:
                            {new Date(flight.departs).toLocaleDateString()}
                        </li>
                    )
                })}
            </ul>
            
        </div>
    )
}

module.exports = Index; 