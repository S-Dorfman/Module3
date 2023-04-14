const React = require('react');

function New() {
    return(
        <div>
            <h1>New Page</h1>
            <form action="/logs" method="POST">
                Title:
                <input type="text" name="title" />
                <br />

                <input type="textarea" name="" />
                shipIsBroken:
                <input type="checkbox" name="title" />
                <input type="submit"/>

            </form>
        </div>
    )
}

module.exports = New;