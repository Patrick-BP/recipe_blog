import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './pages/Layout';
import Home from './components/Home';
import Feeds from './components/Feeds';
import RecipeDetails from './components/RecipeDetails';
import RecipeDetails2 from './components/RecipeDetails2';
import LayoutAdmin from './pages/LayoutAdmin';
import HomeAdmin from './components/Admin/HomeAdmin';
import Error from './pages/Error';
import Users from './components/Admin/Users';
import Categories from './components/Admin/Categories';


function App() {

  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Login/>} /> 
        <Route path='/register' element={<Register/>} /> 
        {token != null ? (<>
          <Route path='/layout' element={<Layout/>} > 
            <Route index element={<Feeds/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='singlerecipe' element={<RecipeDetails/>}/>
            <Route path='singlerecipe2' element={<RecipeDetails2/>}/>
        
        </Route>
        <Route path='/admin' element={<LayoutAdmin/>} > 
            <Route index element={<HomeAdmin/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='categories' element={<Categories/>}/>
        
        </Route>
        </>
        ) : <Route index element={<Login/>} />
        }
        <Route path='*' element={<Error/>}/>

    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
