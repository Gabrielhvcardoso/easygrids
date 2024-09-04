import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Panel from './panel'
import Viewer from './viewer'
import './globals.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className='container'>
            <Viewer />
            <Panel />
        </div>
    </StrictMode>,
)
