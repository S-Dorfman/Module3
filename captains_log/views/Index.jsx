const React = require('react')

function Index(props) {
    const {logs} = props;
    // console.log(logs);

    return(

        <div>
            <h1>Index Page</h1>
        <nav>
            <a href="/logs/new">Add another Log</a>
        </nav>
            <ul>
                {logs.map((log, i) => {
                    return(
                        <li key={log._id}>
                           Log: <a href={`/logs/${log._id}`}>{' '}{log.title}</a> 
                           {log.entry}{' '}{log.shipIsBroken
                           ? `Ship is broken`
                           : `Ship is working. Journey on schedule`
                           }{'.'}

                           <a href={`/logs/${log._id}/edit`}>Edit this log</a>

                    <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
                                <input type="submit" value="DELETE"></input>
                            </form>
                        </li>
                    )
                })}
                </ul> 
        </div>
    
    )}




module.exports = Index; 