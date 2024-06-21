import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import store, { persistor } from "./store/index.ts"
import { Provider } from "react-redux"
import { AuthProvider } from "./contexts/AuthContext.tsx"
import { PersistGate } from "redux-persist/integration/react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </PersistGate>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
)
