import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull, Casting, Cast, Error } from '../interfaces/movieInterface';

interface MovieDetails{
    isLoading: boolean;
    detalleMovie?: MovieFull;
    cast: Cast[];
    error?: Error;
}

const initialState = {
    isLoading: true,
    detalleMovie: undefined,
    cast: [],
    error: undefined,
}

export const useMovieDetails = (movieID: number) => {
    
    const [state, setState] = useState<MovieDetails>(initialState);

    const getMoviesDetails = async() => {

        try {
            const detailMovie = movieDB.get<MovieFull>(`/${movieID}`);
            const castingMovie = movieDB.get<Casting>(`/${movieID}/credits`);

            const [respMovieDetail, respCasting] = await Promise.all([detailMovie, castingMovie]);
            
            setState({...state, detalleMovie: respMovieDetail.data, cast: respCasting.data.cast, isLoading: false})
            
        } catch (error) {
            setState({...state, error})
        }
//        setState(resp);
    }

    useEffect(() => {
        getMoviesDetails();
        return () => { }
    }, [])

    return {...state}
}
