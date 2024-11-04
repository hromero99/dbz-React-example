
import { useEffect } from 'react'
import { CharacterCardComponent } from '../components/characterCardComponent'
import { useState } from 'react'
import { useCharacterApi } from '../hooks/useCharacterApi'

export const CharacterPage = () => {

  const {data, loading} = useCharacterApi();

  const [characterListData, setCharacterListData] = useState(data)
  const [currentPage,setCurrentPage] = useState(1)
  
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
  console.log(data)
  return (
    <>
      {loading ? <p> loading </p> : <>

       <button onClick={NextPageButtonHandler}>Next page</button>
        {data.map((character )=> <CharacterCardComponent name={character.name} image={character.image} id={character.id}/>)}
      </>}
    </>
  )
}

