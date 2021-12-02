import { React, Component, useState, useEffect } from 'react';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
//import Apple from './apple.png';

function EditarProducto() {
    const emptyProduct = {
        name: "",
        category: "",
        price: "",
        description: "",
        image: null
    }
    const { id } = useParams();
    let [product, setProduct] = useState(emptyProduct);

    //Se ejecuta 1 sola vez cuando se renderiza la página, hace el fetch para conseguir la info del producto a mostrar
    useEffect(() => {
        fetch(`http://localhost:9000/api/${id}`)
            .then(res => res.json())
            .then(response => {
                //Con setProduct se cambia el estado de product, que tiene toda la info del producto
                setProduct(product = response[0])
                console.log(product)
            })
            .catch(err => console.log("Error, producto no encontrado", err))
    }, []);

    //Cambia el state del nombre
    const onNameChange = (event) => {
        //Usa setProduct para actualizar el campo de name en product. Los demás los deja iguales
        setProduct(product = {
            name: event.target.value,
            category: product.category,
            price: product.price,
            description: product.description,
            image: product.image
        })
        console.log(event.target.value)
    }

    //Cambia el state de la categoría
    const onCategoryChange = (event) => {
        //Usa setProduct para actualizar el campo de category en product. Los demás los deja iguales
        setProduct(product = {
            name: product.name,
            category: event.target.value,
            price: product.price,
            description: product.description,
            image: product.image
        })
        console.log(event.target.value)
    }

    //Cambia el state de la descripción
    const onDescriptionChange = (event) => {
        //Usa setProduct para actualizar el campo de description en product. Los demás los deja iguales
        setProduct(product = {
            name: product.name,
            category: product.category,
            price: product.price,
            description: event.target.value,
            image: product.image
        })
        console.log(event.target.value)
    }

    //Cambia el state del precio
    const onPriceChange = (event) => {
        //Usa setProduct para actualizar el campo de price en product. Los demás los deja iguales
        setProduct(product = {
            name: product.name,
            category: product.category,
            price: event.target.value,
            description: product.description,
            image: product.image
        })
        console.log(event.target.value)
    }

    //Cambia el state del archivo de imagen
    const onFileSelect = (event) => {
        //this.setState({ image: event.target.files[0] })
        console.log(event.target.files[0])
    }

    //Se ejecuta cuando se le da click al botón de AGREGAR
    const onSaveClick = () => {
        console.log(product)
        //Revisa los campos, si hay uno vacío, manda alerta y no hace nada más
        if (product.name === '' || product.description === '' || product.price === '') {
            alert("Asegúrese de que no queden campos en blanco para guardar los cambios")
        } else {
            fetch(`http://localhost:9000/api/admin/editProduct/${id}`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: product.name,
                    category: product.category,
                    description: product.description,
                    price: product.price
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    alert("Cambios guardados exitosamente")
                })
        }
    }

    return (
        <div className="w-100 tc">
            <div className="pa4 black-80 flex flex-column flex-wrap items-center">
                {/* NOMBRE  ID --> name */}
                <div className="measure">
                    <label htmlFor="name" className="f5 b db mb2">Nombre del producto</label>
                    <input onChange={onNameChange} value={product.name} id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
                </div>
                <br />
                {/* CATEGORÍA  ID --> category */}
                <div className="measure">
                    <label htmlFor="category" className="f5 b db mb2">Categoría</label>
                    <select onChange={onCategoryChange} id="category" className="ba b--black-20 pa2 mb2 db w-100">
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
                    <textarea onChange={onDescriptionChange} value={product.description} id="description" className="input-reset ba b--black-20 pa2 mb2 db w-100" rows="3" cols="30" />
                </div>
                <br />
                {/* PRECIO  ID --> price */}
                <div className="measure">
                    <label htmlFor="price" className="f5 b db mb2">Precio</label>
                    <input onChange={onPriceChange} value={product.price} id="price" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
                </div>
                <br />
                {/* IMAGEN  ID --> image */}
                <div className="measure">
                    <label htmlFor="imagen" className="f5 b db mb2">Imagen</label>
                    <input onChange={onFileSelect} id="image" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="file" />
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
                        <button onClick={onSaveClick} className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg">Guardar cambios</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto
