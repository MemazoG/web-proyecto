import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class AgregarProducto extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            category: 'De Agua',
            description: '',
            price: '',
            image: null
        }
    }

    //Cambia el state del nombre
    onNameChange = (event) => {
        this.setState({ name: event.target.value })
        console.log(event.target.value)
    }

    //Cambia el state de la categoría
    onCategoryChange = (event) => {
        this.setState({ category: event.target.value })
        console.log(event.target.value)
    }

    //Cambia el state de la descripción
    onDescriptionChange = (event) => {
        this.setState({ description: event.target.value })
        console.log(event.target.value)
    }

    //Cambia el state del precio
    onPriceChange = (event) => {
        this.setState({ price: event.target.value })
        console.log(event.target.value)
    }

    //Cambia el state del archivo de imagen
    onFileSelect = (event) => {
        this.setState({ image: event.target.files[0] })
        console.log(event.target.files[0])
    }

    //Se ejecuta cuando se le da click al botón de AGREGAR
    onAddClick = () => {

        //Revisa los campos, si hay uno vacío, manda alerta y no hace nada más
        if (this.state.name === '' || this.state.description === '' || this.state.price === '') {
            alert("Para agregar un producto, debe llenar todos los campos")
        } else {
            fetch("http://localhost:9000/api/admin/newProduct", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: this.state.name,
                    category: this.state.category,
                    description: this.state.description,
                    price: this.state.price
                })
            })
                .then(response => response.json())
                .then(producto => {
                    if (producto) {
                        alert("Producto agregado exitosamente")
                    }
                })
        }

        //fetch a /newProduct con POST
    }


    render() {
        return (
            <div className="w-100 tc">
                <div className="pa4 black-80 flex flex-column flex-wrap items-center">
                    {/* NOMBRE  ID --> name */}
                    <div className="measure">
                        <label htmlFor="name" className="f5 b db mb2">Nombre del producto</label>
                        <input onChange={this.onNameChange} id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
                    </div>
                    <br />
                    {/* CATEGORÍA  ID --> category */}
                    <div className="measure">
                        <label htmlFor="category" className="f5 b db mb2">Categoría</label>
                        <select onChange={this.onCategoryChange} id="category" className="ba b--black-20 pa2 mb2 db w-100">
                            <option value="De Agua">De Agua</option>
                            <option value="De Leche">De Leche</option>
                            <option value="Premium">Premium</option>
                            <option value="Paletas">Paletas</option>
                        </select>
                    </div>
                    <br />
                    {/* DESCRIPCIÓN  ID --> description */}
                    <div className="measure">
                        <label htmlFor="description" className="f5 b db mb2">Descripción</label>
                        <textarea onChange={this.onDescriptionChange} id="description" className="input-reset ba b--black-20 pa2 mb2 db w-100" rows="3" cols="30" />
                    </div>
                    <br />
                    {/* PRECIO  ID --> price */}
                    <div className="measure">
                        <label htmlFor="price" className="f5 b db mb2">Precio</label>
                        <input onChange={this.onPriceChange} id="price" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
                    </div>
                    <br />
                    {/* IMAGEN  ID --> image */}
                    <div className="measure">
                        <label htmlFor="imagen" className="f5 b db mb2">Imagen</label>
                        <input onChange={this.onFileSelect} id="image" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="file" />
                    </div>
                    <br />

                    <div className="flex">
                        {/* BACK BUTTON */}
                        <div className="tc">
                            <Link to="/dashboard">
                                <button className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg">Regresar</button>
                            </Link>
                        </div>
                        {/* SUBMIT BUTTON */}
                        <div className="tc">
                            <button onClick={this.onAddClick} className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg">Agregar producto</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AgregarProducto
