import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "./pages/HomePage"
import DevelopPage from "./pages/Develop"
import { developerData } from "./data/dummy"
import "./App.css"

const router = createBrowserRouter([
  { path: "/",        element: <HomePage />   },
  { path: "/develop", element: <DevelopPage developer={developerData} /> },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
