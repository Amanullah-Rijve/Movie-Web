import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getService } from "../API/Api";

export const MovieDitails = ()=>{
    const {id} = useParams()
    const[movie,setMovie]=useState(null)

    const getSingleMovie = async ()=>{
        try {
            const res = await getService()
            const findMovie = res.data.data.find(
                (item)=>item.movie_id ===id
            )
            setMovie(findMovie)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
    getSingleMovie()
    },[id])

    if(!movie) return <h2>Loading...</h2>
return(
    <div className="ditails-container">
        <img src={movie.poster_path} alt={movie.original_title} />
        <div>
            <h2>{movie.original_title}</h2>
            <p>ID: {movie.movie_id}</p>
            <p>Language: {movie.original_language}</p>
        </div>
    </div>
)
}