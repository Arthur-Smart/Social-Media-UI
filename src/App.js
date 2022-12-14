import Create from './components/pages/create/Create';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Settings from './components/pages/settings/Settings';
import SingleArticle from './components/single/SingleArticle';
import Topbar from './components/topbar/Topbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import{useContext} from 'react'
import { Context } from './components/context/Context';
import About from './components/pages/about/About';
import Chat from './components/pages/chat/Chat';
import './index.css';
import News from './components/pages/news/News';

function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
    <div className="app">
   <Topbar user={user}/>
   <Routes>
     <Route exact path='/' element={<Home/>}/>
     <Route  path='/login' element={user ? <Home/> : <Login/>}/>
     <Route  path='/register' element={user ? <Home/> : <Register/>}/>
     <Route path='/create' element={user ? <Create/> : <Register/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/chat' element={<Chat/>}/>
     <Route  path='/article/:articleId' element={<SingleArticle/>}/>
     <Route  path='/settings' element={user ? <Settings/> : <Register/>}/>
     <Route path='/news' element={<News/>}/>
   </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
