import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import Categorias from './components/Categorias/Categorias';
import Productos from './components/Productos/Productos';
import Contacto from './components/Contacto/Contacto'
import Admin from './components/Admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Inicio />} exact />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos/:id" element={<Productos />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
