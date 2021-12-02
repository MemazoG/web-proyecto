import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import Categorias from './components/Categorias/Categorias';
import Productos from './components/Productos/Productos';
import PaginaProducto from './components/PaginaProducto/PaginaProducto';
import Contacto from './components/Contacto/Contacto'
import Login from './components/Login/Login';
import DashboardAdmin from './components/DashboardAdmin/DashboardAdmin';
import EditarProducto from './components/EditarProducto/EditarProducto';
import EliminarProducto from './components/EliminarProducto/EliminarProducto';
import AgregarProducto from './components/AgregarProducto/AgregarProducto';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      products: []
    }
  }

  //Se llama cuando se carga el componente, obtiene todos los registros de productos (SELECT *)
  componentDidMount() {
    fetch('http://localhost:9000/api/all')
            .then(response => response.json())
            .then(productList => { this.setState({products: productList})});
  }

  onSearchfieldChange = (event) => {
    console.log(event.target.value)
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredProducts = this.state.products.filter(c => {
      return c.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <BrowserRouter>
        <div className="App">
          <Header searchChange={this.onSearchfieldChange} />
        </div>
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/categorias" exact element={<Categorias />} />
          <Route path="/productos" exact element={<Productos cards={filteredProducts} />} />
          <Route path="/contacto" exact element={<Contacto />} />
          <Route path="/pagina-producto/:id" exact element={<PaginaProducto />} />

          <Route path="/login" exact element={<Login />} />
          <Route path="/dashboard" exact element={<DashboardAdmin cards={filteredProducts} />} />
          <Route path="/editar-producto/:id" exact element={<EditarProducto />} />
          <Route path="/eliminar-producto/:id" exact element={<EliminarProducto />} />
          <Route path="/agregar-producto" exact element={<AgregarProducto />} />
        </Routes>

      </BrowserRouter>
    );
  }
}

export default App;
