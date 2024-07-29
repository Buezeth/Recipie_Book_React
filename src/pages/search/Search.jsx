import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Search.css'
import RecipieList from '../../components/RecipieList'

export default function Search() {
    const queryString = useLocation().search
    const queryParam = new URLSearchParams(queryString)
    const query = queryParam.get('q')

    const url = 'http://localhost:3000/recipes?q=' + query

    const {error, isPending, data} = useFetch(url)
    console.log(data)

    const filter = (queryData) => {
        return queryData.filter((item) => {
            return query.toLowerCase().trim() === " " ? item : item.title.toLowerCase().trim().includes(query.toLowerCase())
        })
    }

  return (
    <div>
      <h1 className='queryName'>Recipies Including "{query}"</h1>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
        
      {data && <RecipieList recipies={filter(data)} />}

    </div>
  )
}
