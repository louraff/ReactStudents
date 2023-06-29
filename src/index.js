import {createRoot} from 'react-dom/client'

const root= document.getElementById('root')

import App from './App'
import { StrictMode } from 'react'

createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>
)