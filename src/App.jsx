import React from 'react'
import AppRouter from './util/AppRouter'
import{createBrowserRouter,RouterProvider} from "react-router-dom"
export const API_URL="https://6597a32d668d248edf2318e6.mockapi.io/api/v1/AxiosCRUD"
function App() {
  const router=createBrowserRouter(AppRouter)
  return<>
  <RouterProvider router={router}/>
  </>
}

export default App