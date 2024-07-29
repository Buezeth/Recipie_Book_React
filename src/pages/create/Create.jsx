import { useEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { BrowserRouter, Route, redirect, useNavigate } from 'react-router-dom'
import { projectFireStore } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import './Create.css'

export default function Create() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [cookingTime, setCookingTime] = useState()
  const [method, setMethod] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  // const { data, error, postData} = useFetch('http://localhost:3000/recipes', "POST")



  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(title, method, cookingTime)
    // postData({title, ingredients, method, cookingTime: cookingTime + " minutes"})
    const doc = {title, ingredients, method, cookingTime: cookingTime + " minutes"}

   try {
    const docRef = await  addDoc(collection(projectFireStore, "recipies"), doc)
    navigate('/')
   } catch(err) {
    console.error(err)
   }

  }
  
  // useEffect(()=>{
  //   const redirection = async () => {
  //     const gotData = await data
      

  //     if(gotData) {
  //       console.log("Data got")
  //       navigate('/')
  //     }

  //   }

  //   setTimeout(redirection(), 2000)
  // }, [data])

  const handleAdd = (e) => {
    e.preventDefault()
    // setNewIngredient(e.target.value)
    const ing = newIngredient.trim()
    if(ing && !ingredients.includes(ing)) {
      setIngredients(prevIngr => [...prevIngr, ing])
      // console.log(ingredients)
      setNewIngredient('')
      ingredientInput.current.focus()
    }
  }

  

  // useEffect(()=>{console.log(ingredients)}, [newIngredient])

  return (
    <div className='create-recipie'>
      <h1 className='add-recipie'>Add New Recipie</h1>
      <form action="" className='new-recipie'>
        
        <label className='title'>
          <span>Recipie Title</span>
          <input type="text" 
            onChange={(e)=>{setTitle(e.target.value)}}
            />
        </label>

        <label>
          <div className='ingredients'>
            <span>Recipie Ingredient</span>
            <input type="text" onChange={(e)=>{setNewIngredient(e.target.value)}}
            value={newIngredient}
            ref={ingredientInput}
            />
            <button className='add-btn' onClick={(e)=>{handleAdd(e)}} >add</button>
          </div>
        </label>
        <div className='ing-list'>
          {ingredients && ingredients.map((ingredient) => (
              <span key={ingredient}>{ingredient}, </span>
            ))}
          </div>

        <label className='method'>
          <span>Recipie Method</span>
          <textarea onChange={(e)=>{setMethod(e.target.value)}}></textarea>
        </label>

        <label className='cooking-time'>
          <span>Cooking Time</span>
          <input type="number" onChange={(e)=>{setCookingTime(e.target.value)}} />
        </label>

        <button className='submit-btn' type='submit' onClick={(e)=>{handleSubmit(e)}}>Submit</button>
      </form>
    </div>
  )
}
