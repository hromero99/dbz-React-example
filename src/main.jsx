import { createRoot } from 'react-dom/client'

import { TitleContext } from './contexts/titleContext.jsx'
import { AppComponent } from './components/appComponent.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <TitleContext.Provider >
      <AppComponent/>
    </TitleContext.Provider>
  </Provider>   
)
