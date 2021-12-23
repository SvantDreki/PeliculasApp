import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Cast } from "../interfaces/creditsInterface"
import { MovieFull } from "../interfaces/movieInterface"

interface MovieDetalle {
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[] 
}

const useMovieDatalle = ( movieId: number ) => {
    
    const [state, setState] = useState<MovieDetalle>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })

    const getMovieDetalle = async () => {
        
        const detallePromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get(`/${movieId}/credits`);

        const [ detalleResp, castResp ] = await Promise.all([ detallePromise, castPromise ]);

        setState({
            isLoading: false,
            movieFull: detalleResp.data,
            cast: castResp.data.cast
        });

    }

    useEffect(() => {
        getMovieDetalle();
    }, []);

    return {
        ...state
    }

}

export default useMovieDatalle
