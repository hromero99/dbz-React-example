// Stateless component 

import { NavLink } from "react-router-dom"


//Object destructuring

export const CharacterCardComponent = ({name,image,index,id}) => {
    
    return <div key={index}>
        <img src={image} style={{width: "200px", height:"auto"}}  />
        <NavLink to={`/character/${id}`}> <h4>{name}</h4> </NavLink>

    </div>
}