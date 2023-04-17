const React = require('react');

function Show(props) {
    const {log} = props;
    return(
        <div>
            <h1>Show Page</h1>
            <nav>
                <a href="/logs">Back to Index</a>
            </nav>
            <p>{log.title}{' '}
            {log.entry}{' '}
            {log.shipIsBroken ?
            `Ship is Broken` :
            `Ship is working`
            }</p>
            
        </div>
    )
}

module.exports = Show;