import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar() {
    const [terms, setTerms] = useState()
    const navigate = useNavigate()
    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`/search?q=${terms}`)
    }
  return (
    <div>
      <form className='searchBar' onSubmit={(e)=>{handleSearch(e)}}>
        <label htmlFor="search">Search: </label>
        <input type="text" id='search' onChange={(e)=>{setTerms(e.target.value)}} />
      </form>
    </div>
  )
}
