import { useContext, useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { CharacterCardComponent } from "../components/characterCardComponent"
import { useCharacterApi } from "../hooks/useCharacterApi"
import { TitleContext } from "../contexts/titleContext"


export const CharacterDetailPage = () => {
    const { id } = useParams()
    const {data,loading} = useCharacterApi(id)
    const {state,dispatch} = useContext(TitleContext)
    
    dispatch({type: "setTitle", payload: "Character Page"})
    return <>
        {loading ? <p>Loading</p> :
            <>
                <CharacterCardComponent image={data.image} name={data.name} />
                <div className="" style={{display: "flex"}}>
                    {data.transformations.map((tranform, index) => <CharacterCardComponent image={tranform.image} name={tranform.name} id={tranform.id}/>)}
                </div>
            </>
        }
    </>
}
