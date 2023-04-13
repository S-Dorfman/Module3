const React = require('react');

function New() {
    return(
        <div>
            <h1>Enter New Flight</h1>

            <form action="/flights" method="POST"> 
                Airline: <br />
                <input type="text" name="airline" />
                <br />
                <br />
                Flight Number: <br />
                <input type="number" name="flightnum"/>
                <br />
                <br />
                Departure: <br />
                <input type="datetime-local"  name="departs" value="2024-04-13T19:30"/>
                <br />
                <br />
                <input type="submit" value="Create Flight" />
            </form>
        </div>
    )
}

module.exports = New;