import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import './Recipie.css'
import { useTheme } from '../../hooks/useTheme'
import { projectFireStore } from '../../firebase/config'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export default function Recipie() {
    const {id} = useParams()
    // const {data: recipie, isPending, error} = useFetch('http://localhost:3000/recipes/' + id)
    // console.log(id)

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    const docRef = doc(projectFireStore, 'recipies', id)

    useEffect(()=>{
        const getData = async ()=> {
            try {
                setIsPending(true)
                const db = await getDoc(docRef)
                // console.log(db.data())
                setData(db.data())
                setIsPending(false)
            }
            catch(err) {
                console.log('No such recipie')
                console.error(err)
            }
        }

        getData()
    }, [])

    const {mode} = useTheme()
  return (
    <div className={`recipie ${mode}`}>
      {/* <h1>Recipie</h1> */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {data && 
      <div className='recipie-discription'>
        <h1>{data.title}</h1>
        <br />
        <h2>Takes {data.cookingTime} to cook</h2>
        <br />
        <h3>Ingredients</h3>
        <ul>
            {data.ingredients.map((ing) => (
                <li key={ing}>{ing}</li>
            ))}
        </ul>
        <br />
        <p>{data.method}</p>
        </div>}
    </div>
  )
}
