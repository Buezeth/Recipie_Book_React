import { Link } from "react-router-dom"
import './NavBar.css'
import SearchBar from "./SearchBar"
import { useTheme } from "../hooks/useTheme"

export default function NavBar() {
    const {color, changeColor} = useTheme()
  return (
    <div className="nav-bar" style={{background: color}} > 
      <nav>
        <Link to='/' className="brand">Recipie Book</Link>
        <SearchBar />
        <Link to="/create" className="create">Create Recipie</Link>
      </nav>
    </div>
  )
}
