import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Passwordless } from "../src/components/client/index.ts";
import {
  PasswordlessContextProvider,
  Passwordless as PasswordlessComponent,
  Fido2Toast,
} from "../src/components/client/react/index.ts";



Passwordless.configure({
  cognitoIdpEndpoint: import.meta.env.VITE_COGNITO_IDP_ENDPOINT,
  clientId: import.meta.env.VITE_CLIENT_ID,
  debug: console.debug,
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <PasswordlessContextProvider enableLocalUserCache={true}>
    <PasswordlessComponent>

      {/* <React.StrictMode>
        <App />
      </React.StrictMode> */}

    </PasswordlessComponent>
  </PasswordlessContextProvider>
)
