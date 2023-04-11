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
        </div>
    )
}

module.exports = Index; 