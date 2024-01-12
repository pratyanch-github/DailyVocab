import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'

import WordsContainer from './components/Daily words/WordsContainer.jsx';
import ProgrammingContainer from './components/Daily Programming/ProgrammingContainer.jsx';
import DailyQuestion from './components/Daily Programming/DailyQuestion.jsx';
import AllQuesList from './components/Daily Programming/AllQuesList.jsx';
import SideBarQS from './components/Daily Programming/SideBarQS.jsx';



let AppLayout = createBrowserRouter([
  {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <WordsContainer/>,
        },
        {
          path: "dsa",
          element: <ProgrammingContainer/>,
          children:[
            {
              path: ":id",
              element : <SideBarQS/>
            },
            {
              path: "dailyQS",
              element: <DailyQuestion/>
            },
            {
              path: "all",
              element: <AllQuesList/>
            },
          ]
    
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
