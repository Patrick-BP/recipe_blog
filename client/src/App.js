import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './pages/Layout';
import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Login/>} /> 
        <Route path='register' element={<Register/>} /> 
        <Route path='layout' element={<Layout/>} > 
            <Route index element={<Home/>}/>
            <Route path='singlerecipe' element={<RecipeDetails/>}/>
        
        </Route>

    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
