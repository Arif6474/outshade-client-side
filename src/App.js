
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Entry/Login';
import Register from './components/Entry/Register';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div >
       <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
