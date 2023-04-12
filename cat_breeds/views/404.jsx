const React = require('react')

function NotFound() {
    return(
        <div>
            <h1>404 Page Not Found</h1>
            <img></img>
            <nav>
                <a href="/cats">Go back Home</a>
            </nav>
            <img src="https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5ncnklMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
        </div>
    )
}

module.exports = NotFound;