import { Link } from "react-router-dom";
import '../components/Navbar.css'

export const Navbar = ({setSearch})=>{
return(
    <nav className="navbar">
        <h2>Watch Movie</h2>

        <div className="nav-links">
            <Link to='/' > Home</Link>
            <Link to='/add' >Add Movie</Link>
        </div>
        <input
        type="text"
        placeholder="search movie...."
        onChange={(e)=>setSearch(e.target.value)}
        />
    </nav>
)
}