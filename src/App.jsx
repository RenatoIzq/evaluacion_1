import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "./pages/HomePage"
import DevelopPage from "./pages/Develop"
import "./App.css"

const router = createBrowserRouter([
  { path: "/",        element: <HomePage />   },
  { path: "/develop", element: <DevelopPage /> },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
