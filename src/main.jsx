import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ListPepole } from './components/listPepole.component.jsx';
import { ShowPerson } from './components/showPerson.component.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{
      path: ':type',
      Component: ListPepole,
      children: [{
        path: ':id',
        Component: ShowPerson,
      }]
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router} />

)
