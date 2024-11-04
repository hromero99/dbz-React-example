import { useState } from "react"
import { useEffect } from "react"


export const useCharacterApi = (id=null) => {
    const [characterListData,setCharacterListData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let url = "https://dragonball-api.com/api/characters?limit=10"
        if (id!=null){
            url = `https://dragonball-api.com/api/characters/${id}`
        }
        console.log(url)
        fetch(url).then((req) => {
            req.json().then((data) => {
                if (id === null)
                    setCharacterListData(data.items)
                else
                    setCharacterListData(data)

                setIsLoading(false)
            })
        })

    }, [])
    return {loading: isLoading, data: characterListData}
}