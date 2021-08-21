import { useEffect, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonFull } from "../interfaces/pokemonInteface";



export const usePokemon = (id: string) => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemonFull, setPokemon] = useState<PokemonFull>({} as PokemonFull);

    const loadPokemon = async() => {
        const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(resp.data);
        setIsLoading(false)
    }

    useEffect(() => {
        loadPokemon();
        return () => {}
    }, [])

    return { isLoading, pokemonFull }
}
