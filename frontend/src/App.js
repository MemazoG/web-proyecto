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
import Admin from './components/Admin/Admin';

import { cards1 } from './cards';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      cards: cards1
    }
  }

  onSearchfieldChange = (event) => {
    console.log(event.target.value)
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredCards = this.state.cards.filter(c => {
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
          <Route path="/productos" exact element={<Productos cards={filteredCards} />} />
          <Route path="/contacto" exact element={<Contacto />} />
          <Route path="/pagina-producto/:id" exact element={<PaginaProducto />} />

          <Route path="/login" exact element={<Login />} />
          <Route path="/admin" exact element={<Admin />} />
        </Routes>

      </BrowserRouter>
    );
  }
}

export default App;
