import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"


export const LayoutComponent = () => {

    return <>
        <header>
            <nav>
                <ul>
                    <li> <NavLink to={"/"}>Personajes</NavLink> </li>
                    <li> <NavLink to={"/planets"}>Planetas</NavLink></li>
                </ul>
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
