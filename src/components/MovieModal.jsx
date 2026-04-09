import '../pages/Modal.css'

export const Moviemodal = ({movie,onClose})=>{
    return(
        <div className="modal-overlay" onClick={onClose} >
        <div className="modal-content" onClick={(e)=> e.stopPropagation()} >
        <button className="close-btn" onClick={onClose} >✖</button>
        <img src= {movie.poster_path}alt={movie.original_title} />
        <h2>{movie.original_title}</h2>
        <p><strong>language:</strong>{movie.original_language}</p>
        <div className="video-container">
        <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Trailer"
            allowFullScreen
        ></iframe>
        </div>
        </div>
        </div>
    )

}