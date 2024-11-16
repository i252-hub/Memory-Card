import { useState, useEffect } from "react"
const PokemonGallery = () =>{
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true);
            setError(null);
            try {
                const promises = [];
                for (let id = 1; id <= 10; id++){
                    promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json()));
                }
                const results = await Promise.all(promises);
                const formattedResults = results.map((pokemon)=> ({
                    name: pokemon.name,
                    image: pokemon.sprites.front_default,
                }));
                setPokemonList(formattedResults);
            }
            catch{
                setError("Failed to load Pokémon data. Please try again.");
                }
            finally {
                    setLoading(false);
                  }
        };
        fetchPokemon();
    }, []);

    return(
        <>
        {loading && <p>Loading...</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {pokemonList.map((pokemon, index) => (
                <div key={index}>
                    <img src={pokemon.image} alt={pokemon.name} style={{width: "100px", height: "100px"}} />
                    <p>{pokemon.name}</p>
                    </div>
        ))}

        </div>
        </>
    )
}

export default PokemonGallery;