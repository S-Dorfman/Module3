const React = require('react');

function Edit(props) {
    const {log} = props
    return(
        <div>
            <h1>Edit Page</h1>
            <form method="POST" action={`/logs/${log._id}/?_method=PUT`}>
                Title:
                <input type="text" name="title" defaultValue={log.title}/>
                <br />
                Entry:
                <textarea name="entry" cols="10" rows="4" defaultValue={log.entry}></textarea>
                <br />
                Ship is Broken: {
                    log.shipIsBroken ? <input type="checkbox" defaultChecked/> 
                    : <input type="checkbox"/>
                }
                <br />
                <br />
                <input type="submit" value="Submit Changes"/>

            </form>
        </div>
    )
}

module.exports = Edit;