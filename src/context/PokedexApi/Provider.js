import {useState} from "react";
import PokemonContext from "./index";
import apiCall from "../../api";

export default function PokemonProvider({children}) {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState([]);
    const [isLoadin, setIsLoading] = useState(false);

    const getPokemons = async () => {
        try {
            setIsLoading(true);
            const pokemonsResult = await apiCall({url: "https://pokeapi.co/api/v2/pokemon?limit=100"});
            setPokemons(pokemonsResult.results);
        } catch (error) {
            setPokemonDetail([]);
        } finally {
            setIsLoading(false);
        }
    };

    const getPokemonDetail = async (id) => {
        if (!id) Promise.reject("id es requerido");
        setIsLoading(true);
        try {
            const pokemonDetail = await apiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}`});
            setPokemonDetail(pokemonDetail);
        } catch (error) {
            setPokemonDetail([]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <PokemonContext.Provider value={{getPokemons, pokemons, getPokemonDetail, pokemonDetail, isLoadin}}>
            {children}
        </PokemonContext.Provider>
    );
}
