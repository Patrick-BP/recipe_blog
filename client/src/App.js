import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './pages/Layout';
import Home from './components/Home';
import Feeds from './components/Feeds';
import RecipeDetails from './components/RecipeDetails';
import LayoutAdmin from './pages/LayoutAdmin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Login/>} /> 
        <Route path='register' element={<Register/>} /> 
        <Route path='layout' element={<Layout/>} > 
            <Route index element={<Feeds/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='singlerecipe' element={<RecipeDetails/>}/>
        
        </Route>
        <Route path='admin' element={<LayoutAdmin/>} > 
            <Route index element={<Home/>}/>
            <Route path='singlerecipe' element={<RecipeDetails/>}/>
        
        </Route>

    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
