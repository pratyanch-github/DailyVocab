import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import WordsContainer from './components/Daily words/WordsContainer.jsx';



let AppLayout = createBrowserRouter([
  {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <WordsContainer/>,
        }
      ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppLayout}>
        <App />
    </RouterProvider>
  </React.StrictMode>,
)
