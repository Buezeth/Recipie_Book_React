import { useTheme } from '../hooks/useTheme'
import './RecipieList.css'
import { Link } from 'react-router-dom'
import { collection } from 'firebase/firestore'
import { deleteDoc, doc } from 'firebase/firestore'
import { projectFireStore } from '../firebase/config'
import delete_icon from "../assets/delete_24dp_FILL0_wght400_GRAD0_opsz24.svg"

export default function RecipieList({recipies}) {

    if(recipies.length === 0) {
        return <div className='error'>No recipies to Load</div>
    }

    const {mode} = useTheme()

    const handleClick = async (id) => {
        await deleteDoc(doc(projectFireStore, "recipies", id))
    }

  return (
    <div className='recipie-list'>
      {recipies.map(recipie => (
        <div key={recipie.id} className={`recipie-box ${mode}`}>
            <h3>{recipie.title}</h3>
            <p className='time'>{recipie.cookingTime} to cook</p>
            <p>{recipie.method.substring(0, 100)}...</p>
            <div className='bottom'>
                <Link className='cook-this' to={`/recipie/${recipie.id}`}>Cook This</Link>
                <img 
                    className='delete'
                    src={delete_icon} 
                    alt="delete" 
                    onClick={() => handleClick(recipie.id)}
                    />
            </div>
        </div>
      ))}
    </div>
  )
}
