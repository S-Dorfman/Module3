//Index page to render all pokemon 

const React = require('react')

function Index(props) {
    const {pokemon} = props;
    // console.log(pokemon);
  return (
    <div>
        <h1>Pokemon Index Page</h1>
        <ul>
            {pokemon.map((pokemon, i) => {
                return (
                    // to capitalize first letter
                    <li><a href={`/pokemon/${i}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>{' '}{pokemon.img}</li>
                )
            })}
        </ul>
    </div>
  )
}

module.exports = Index;