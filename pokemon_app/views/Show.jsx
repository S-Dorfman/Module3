// SHow page - view 1 at a time

const React = require('react')

function Show(props) {
    const {pokemon} = props;
    console.log(pokemon);
  return (
    <div>
        <h1>Gotta catch 'em all</h1>
        <h2>{pokemon.name}</h2> 
        <img src={pokemon.img + '.jpg'}></img> 
        <nav>
        <a href="/pokemon">back to home</a>
        </nav>
    </div>
  )
}

module.exports = Show;