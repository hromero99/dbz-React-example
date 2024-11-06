import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { TitleContext } from "../contexts/titleContext"


export const LayoutComponent = () => {
    const {state,dispatch} = useContext(TitleContext)
    console.log(state)

    return <>
        <header>
            <nav>
                <ul>
                    <li> <NavLink to={"/"}>Personajes</NavLink> </li>
                    <li> <NavLink to={"/planets"}>Planetas</NavLink></li>
                </ul>
                <h4>Página actual: {state}</h4>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <p>@ Héctor Romero</p>
        </footer>
    </>
}
