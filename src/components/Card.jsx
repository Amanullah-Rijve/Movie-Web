import '../App.css'

export const Card = ({MovieData})=>{
const  {original_title,poster_path} = MovieData

return (
<li className="hero-container">
    <div className="main-container">
        <div className="poster-container">
            <img src={poster_path} alt={original_title} />
            <p>Title: {original_title}</p>
            <button>Watch Now</button>
        </div>
    </div>
</li>
)

}