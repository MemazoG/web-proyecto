import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Apple from './apple.png';

function EliminarProducto() {
    const emptyProduct = {
        name: "",
        category: "",
        price: "",
        description: "",
        image: null
    }
    const { id } = useParams();
    let [product, setProduct] = useState(emptyProduct);

    useEffect(() => {
        fetch(`http://localhost:9000/api/${id}`)
            .then(res => res.json())
            .then(response => {
                setProduct(product = response[0])
                console.log(product)
            })
            .catch(err => console.log("Error, producto no encontrado", err))
    }, []);

    return (
        <div>
            <div className="flex justify-center w-100">
                <div className="ba b--white bw2 w-30 tc">
                    {/* IMAGEN */}
                    <img className="img" alt="product" src={Apple} />
                </div>

                <div className="ba b--yellow bw2 w-50">
                    {/* NOMBRE */}
                    <h1>{product.name}</h1>
                    <div className="flex inline-flex ml2">
                        {/* PRECIO */}
                        <p className="ma0 w-50">{product.price}</p>
                        {/* CATEGORÍA */}
                        <p className="ma0 w-50 i">{product.category}</p>
                    </div>
                    {/* DESCRIPCIÓN */}
                    <p>{product.description}</p>
                </div>
            </div>
            <div className="tc flex justify-center">
                <div>
                    <Link to="/dashboard">
                        <button className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg">Regresar</button>
                    </Link>
                </div>
                <button className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg">Eliminar</button>
            </div>
        </div>
    )
}

export default EliminarProducto
