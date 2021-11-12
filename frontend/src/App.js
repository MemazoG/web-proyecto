import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import Categorias from './components/Categorias/Categorias';
import Productos from './components/Productos/Productos';
import Contacto from './components/Contacto/Contacto'
import Admin from './components/Admin/Admin';

import {cards1} from './cards';

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
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filteredCards = this.state.cards.filter(c => {
      return c.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <BrowserRouter>
        <div className="App">
          <Header searchChange={this.onSearchfieldChange}/>
        </div>
        <Routes>
          <Route path="/" element={<Inicio />} exact />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/productos" element={<Productos cards={filteredCards} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/pagina-producto/:id" element={<Productos />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
