
import { useContext, useEffect } from 'react'
import { CharacterCardComponent } from '../components/characterCardComponent'
import { useState } from 'react'
import { TitleContext } from '../contexts/titleContext'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacterListThunk } from '../features/character/characterThunk'
import { characterSelector, characterStatusSelector } from '../features/character/characterSlice'

export const CharacterPage = () => {
  const {state,dispatch} = useContext(TitleContext)
  const [characterListData, setCharacterListData] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [currentPage,setCurrentPage] = useState(1)
  
  const dispatchRedux = useDispatch()

  const characterList = useSelector(characterSelector)
  const characterStatus = useSelector(characterStatusSelector)
  dispatch({type: "setTitle", payload: "CharacterListPage"})

  useEffect(() => {
    if (characterStatus === "idle"){
      dispatchRedux(getCharacterListThunk())
    }
    else if (characterStatus === "pending"){
      setIsLoading(true)
    }
    else if(characterStatus === "fulfilled"){
      setIsLoading(false)
      setCharacterListData(characterList)
    }
  },[characterList,characterStatus])


  const NextPageButtonHandler = () => {
    setIsLoading(true)
    fetch(`https://dragonball-api.com/api/characters?page=${currentPage  +1 }&limit=10`).then((req) => {
      req.json().then((data) => {
        setCharacterListData(data.items)
        setIsLoading(false)
        setCurrentPage(data.meta.currentPage)
      })
    })
  }

  
  const filterCharacterInputHandler = (event) => {
    const value = event.target.value
    console.log(value)
    console.log(characterListData)
    if (value === "")
      setCharacterListData(characterList)
    else
      setCharacterListData(characterList.filter((character) => character.name.includes( value)))
  }

  return (
    <>
      {isLoading ? <p> loading </p> : <>
        <input type="text" onChange={filterCharacterInputHandler}/>
       <button onClick={NextPageButtonHandler}>Next page</button>
        {characterListData.map((character )=> <CharacterCardComponent name={character.name} image={character.image} id={character.id}/>)}
      </>}
    </>
  )
}

