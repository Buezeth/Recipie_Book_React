import { useEffect, useState } from 'react'
import RecipieList from '../../components/RecipieList'
// import { useFetch } from '../../hooks/useFetch'
import { projectFireStore } from '../../firebase/config'
import { getDocs, collection, onSnapshot } from 'firebase/firestore'
import './Home.css'


export default function Home() {
    // const {data, isPending, error} = useFetch("http://localhost:3000/recipes")

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
    // const [fetchedData, setFetchedData] = ([])

    const recipieCollection = collection(projectFireStore, 'recipies')

    useEffect(()=>{
        const getDb = async ()=> {
            try {
                setIsPending(true)
                //Test
                // const fetched = []
                // const db =  await onSnapshot(recipieCollection, (querySnapshot) => {
                //   querySnapshot.forEach((doc)=> {
                //     fetched.push({id: doc.data().id, ...doc.data()})
                //   })
                // })

                // // console.log(fetched)
                // setData(fetched)
                // setIsPending(false)

                //No test

                const db =  await getDocs(recipieCollection)
                const filteredDb = db.docs.map((doc) =>  ({...doc.data(), id: doc.id}))
                // console.log(db)
                setData(filteredDb)
                // console.log(data)
                setIsPending(false)
            }
            catch(err) {
                setError(true)
                console.error(err)
            }
        }

        getDb()
    }, [])

  return (
    <div>
        <br />
      {/* <h1>Home</h1> */}
      {error && <div>{error}</div>}
      {isPending && <div className='loading'>Loading...</div>}
      {data && <RecipieList recipies={data} />}
    </div>
  )
}
