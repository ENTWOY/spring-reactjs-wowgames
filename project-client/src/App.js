import logo from './logo.svg';
import './App.css';
import ListUsuariosComponent from './components/ListUsuariosComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUsuarioComponent from './components/AddUsuarioComponent';
import { HomeComponent } from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import AddPostComponent from './components/AddPostComponent';
import BlogComponent from './components/BlogComponent';
import ContactComponent from './components/ContactComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<HomeComponent />}></Route>
              <Route exact path='/home' element={<HomeComponent />}></Route>
              <Route exact path='/login' element={<LoginComponent />}></Route>
              <Route exact path='/blog' element={<BlogComponent />}></Route>
              <Route exact path='/contactanos' element={<ContactComponent />}></Route>
              <Route exact path='/crear-post' element={<AddPostComponent />}></Route>
              <Route exact path='/usuarios' element={<ListUsuariosComponent />}></Route>
              <Route exact path='/add-user' element={<AddUsuarioComponent />}></Route>
              <Route exact path='/edit-user/:id' element={<AddUsuarioComponent />}></Route>
            </Routes>
          </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}


export default App;
