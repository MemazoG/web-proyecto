import { React, Component } from 'react';
//import Apple from './apple.png';

class EditarProducto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.product.name,
            category: '',
            description: this.props.product.id,
            price: '',
            image: null
        }
    }

    //Cambia el state del nombre
    onNameChange = (event) => {
        this.setState({name: event.target.value})
        console.log(event.target.value)
    }

    //Cambia el state de la categoría
    onCategoryChange = (event) => {
        this.setState({category: event.target.value})
        console.log(event.target.value)
    }

    //Cambia el state de la descripción
    onDescriptionChange = (event) => {
        this.setState({description: event.target.value})
        console.log(event.target.value)
    }

    //Cambia el state del precio
    onPriceChange = (event) => {
        this.setState({price: event.target.value})
        console.log(event.target.value)
    }

    //Cambia el state del archivo de imagen
    onFileSelect = (event) => {
        this.setState({image: event.target.files[0]})
        console.log(event.target.files[0])
    }

    //Se ejecuta cuando se le da click al botón de GUARDAR CAMBIOS
    onSaveClick = () => {
        console.log("click")
        console.log(this.state)
        //fetch a /add con POST

        //cambiar a pantalla de DASHBOARD
    }

    render() {
        return (
            <div className="w-100 tc">
                <div className="pa4 black-80 flex flex-column flex-wrap items-center">
                    {/* NOMBRE  ID --> name */}
                    <div className="measure">
                        <label htmlFor="name" className="f5 b db mb2">Nombre del producto</label>
                        <input onChange={this.onNameChange} value={this.props.product.name} id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
                    </div>
                    <br />
                    {/* CATEGORÍA  ID --> category */}
                    <div className="measure">
                        <label htmlFor="category" className="f5 b db mb2">Categoría</label>
                        <select onChange={this.onCategoryChange} id="category" className="ba b--black-20 pa2 mb2 db w-100">
                            <option value="de-agua">De Agua</option>
                            <option value="de-leche">De Leche</option>
                            <option value="premium">Premium</option>
                            <option value="paletas">Paletas</option>
                        </select>
                    </div>
                    <br />
                    {/* DESCRIPCIÓN  ID --> description */}
                    <div className="measure">
                        <label htmlFor="description" className="f5 b db mb2">Descripción</label>
                        <textarea onChange={this.onDescriptionChange} value={this.props.product.id} id="description" className="input-reset ba b--black-20 pa2 mb2 db w-100" rows="3" cols="30" />
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

                    {/* SAVE BUTTON */}
                    <div className="tc">
                        <button onClick={this.onSaveClick} className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg">Guardar cambios</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditarProducto
