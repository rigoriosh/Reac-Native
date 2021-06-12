import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';


export const useMovies = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [pelicualasEnCine, setPelicualasEnCine] = useState<Movie[]>([]);

    const getMovies = async() => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')/* 
        .then((resp: any) => {
            setResp(resp.data.results[0].title); 
            console.log(resp.data);
        }) */

        const peliculas = resp.data.results;

        setPelicualasEnCine(peliculas);
        setIsLoading(false);


    }

    useEffect(() => {

        setIsLoading(true);
        getMovies();

        return () => { }
    }, [])



    return {pelicualasEnCine, isLoading}
}
