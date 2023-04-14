const React = require('react');

function New() {
    return(
        <div>
            <h1>New Page</h1>
            <form action="/logs" method="POST">
                Title:
                <input type="text" name="title" />
                <br />
                Entry:
                <textarea name="entry" cols="10" rows="4"></textarea>
                <br />
                Ship Is Broken:
                <br />
                <input type="checkbox" name="shipIsBroken" />
                <br />
                <input type="submit" value="Create Entry"/>

            </form>
        </div>
    )
}

module.exports = New;