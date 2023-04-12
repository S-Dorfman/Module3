const React = require('react')

function Index(props) {
const {cats} = props;
console.log(cats);

    return(

        <div>
            <h1>Index Page</h1>
            <ul>
                {cats.map((cat, i) => {
                    return (
                        
                        <li>
                            The <a href={`/cats/${i}`}>{cat.breed}</a>
                            {' '}cat originates from {cat.origin}{'. '}
                            It's personality is {' '}{cat.personality}{'. '}
                            {cat.hypoallergenic
                            ? `It is hypoallergenic`
                            : `It is not hypoallergenic`}{'.'}
                        </li>
                    )
                })}
            </ul>  
            <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"></img> 
        </div>
    )
}

module.exports = Index; 