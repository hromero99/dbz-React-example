import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { CharacterPage } from '../pages/CharacterPage.jsx'
import { CharacterDetailPage } from '../pages/CharacterDetailPage.jsx'
import { LayoutComponent } from '../components/LayoutComponent.jsx'
import { TitleContext } from '../contexts/titleContext.jsx'
import { useReducer } from 'react'


export const AppComponent = () => {

    const TitleReducerHandler = (state, action) => {
        console.log(state)
        console.log(action)
        if (action.type === "setTitle") {
            return action.payload
        }
    }

    const [state, dispatch] = useReducer(TitleReducerHandler, "");



    return <TitleContext.Provider value={{state:state, dispatch:dispatch}}>
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutComponent />}>

                    <Route element={<CharacterPage />} path='' />
                    <Route element={<CharacterPage />} path='/planets' />

                    <Route element={<CharacterDetailPage />} path='/character/:id' />
                </Route>


            </Routes>
        </BrowserRouter>
    </TitleContext.Provider>
}