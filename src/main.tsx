import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProviderWrapper } from './context/auth.context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProviderWrapper>
                <App />
            </AuthProviderWrapper>
        </BrowserRouter>
    </React.StrictMode>,
)
