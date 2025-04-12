import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
  
} from 'react-router-dom'

//layout
import NavBar from './layouts/NavBar'

//pages
import HomePage from './pages/HomePage'
import ContentPage ,{ contentLoader }from './pages/ContentPage'
import { celestialObjects } from './data'

import './App.css';


async function navLoader() {
  return celestialObjects;
}



function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element ={<NavBar />}  loader = {navLoader}>
        <Route index element = {<HomePage />} />
        <Route path = "content/:id" element = {<ContentPage />} loader = {contentLoader}/>
      </Route>
    ),
    {
      context: {celestialObjects}
    }
  )

  return (
    <RouterProvider router = {router} />
  )
}



export default App
