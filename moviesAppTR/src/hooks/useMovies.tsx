import { useEffect, useState } from 'react';
//import ImageColors from 'react-native-image-colors';

import movieDB from '../api/movieDB';
import { Movie, MoviesDB } from '../interfaces/movieInterface';
//import { constantesApp } from '../helpers/constantes';
//import { getPosterColors } from '../helpers/getPosterColors';



interface MoviesState{
    nowPlaying: Movie[];
    popular:    Movie[];
    topRated:   Movie[];
    upComing:   Movie[];
}

export const useMovies = () => {

    const [posterActual, setPosterActual] = useState(0);
    const [colorsPosterActual, setColorsPosterActual] = useState<{primary:string, secundary: string}>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [stateMovies, setStateMovies] = useState<MoviesState>(
        {
            nowPlaying: [],
            popular: [],
            topRated: [],
            upComing: [],
        }
    );
    const [responseError, setResponseError] = useState<any>();
    

    const getMovies = async() => {
        
        try {
            const nowPlayingPromise =  movieDB.get<MoviesDB>('/now_playing');
            const popularPromise =  movieDB.get<MoviesDB>('/popular');
            const respTopRated =  movieDB.get<MoviesDB>('/top_rated');
            const respUpcoming =  movieDB.get<MoviesDB>('/upcoming');
    
            const response = await Promise.all([nowPlayingPromise, popularPromise, respTopRated, respUpcoming]);

            setStateMovies(
                {
                    nowPlaying: response[0].data.results,
                    popular:response[1].data.results,
                    topRated:response[2].data.results,
                    upComing:response[3].data.results,
                });

                setIsLoading(false);
            
        } catch (error) {
            
            setResponseError(error);
        }
        

        
        /* const popularPromise = await movieDB.get<MoviesDB>('/popular');
        const topRatedPromise = await movieDB.get<MoviesDB>('/top-rated'); */
        /* const upComingPromise = await movieDB.get<MoviesDB>('/upcoming') */
        
        //const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upComingPromise]);
        
        /* setStateMovies(
            {
                nowPlaying  : nowPlayingPromise.data.results,
                popular     : popularPromise.data.results,
                topRated    : topRatedPromise.data.results,
                upComing    : upComingPromise.data.results,
            }
        ) */

        /* setStateMovies({
            nowPlaying: response[0].data.results,    
            popular:    response[1].data.results,
            topRated:   response[2].data.results,
            upComing:   response[3].data.results,
        })  */
        /* 
        .then((resp: any) => {
            setResp(resp.data.results[0].title); 
            console.log(resp.data);
        }) */

         

        
        


    }

    

    useEffect(() => {
        
        setIsLoading(true);
        getMovies();

        return () => { }
    }, [])

    useEffect(() => {
        //getColors(posterActual);
        return () => { }
    }, [posterActual])



    return {...stateMovies, isLoading, responseError, setPosterActual, colorsPosterActual}
}
