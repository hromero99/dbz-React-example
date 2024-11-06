import { createRoot } from 'react-dom/client'

import { TitleContext } from './contexts/titleContext.jsx'
import { AppComponent } from './components/appComponent.jsx'



createRoot(document.getElementById('root')).render(
<TitleContext.Provider >

    <AppComponent/>
  </TitleContext.Provider>
)
