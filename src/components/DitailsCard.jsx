import '../components/Ditails.css'
import { useState } from "react";
import { MovieModal } from './MovieModal';

export const DitailsCard = ({MovieData})=>{
const{original_title, poster_path,}= MovieData
const [open,setOpen] =useState(false)

return(
    <>
    <li
    className="hero-container">
            <div className="main-container">
                <div className="poster-container">
                    <img src={poster_path} alt={original_title} />
                    <p>{original_title}</p>
                    <button
                    onClick={()=>setOpen(true)}
                    >Watch Now</button>
                </div>
            </div>
    </li>

    {
        open &&(
            <MovieModal Movie={MovieData} onClose={()=>setOpen(false)} />
        )
    }
    </>
)

}