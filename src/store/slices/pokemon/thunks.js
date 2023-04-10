import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./PokemonSlice"


export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        //TODO: hacer peticion http
     
        // con fetch
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page*10 }`);
        // const data = await resp.json();

        //usando axios
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page*10 }`);
        
        dispatch(setPokemons({ pokemons: data.results, page: page + 1}));

    }
}