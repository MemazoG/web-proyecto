// import { React, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router';
// import Apple from './apple.png';

// function EliminarProducto() {
//     const emptyProduct = {
//         name: "",
//         category: "",
//         price: "",
//         description: "",
//         image: null
//     }
//     const { id } = useParams();
//     let [product, setProduct] = useState(emptyProduct);

//     useEffect(() => {
//         fetch(`http://localhost:9000/api/${id}`)
//             .then(res => res.json())
//             .then(response => {
//                 setProduct(product = response[0])
//                 console.log(product)
//             })
//             .catch(err => console.log("Error, producto no encontrado", err))
//     }, []);

//     const onButtonClick = () => {
//         //Fetch a /api/admin/delProduct/:id con POST
//         fetch(`http://localhost:9000/api/admin/delProduct/${id}`, {
//                 method: "post",
//                 headers: { "Content-Type": "application/json" },
//             })
//                 .then(response => {
//                     alert("Producto eliminado")
//                 })
//     }

//     return (
//         <div>
//             <div className="flex justify-center w-100">
//                 <div className="ba b--white bw2 w-30 tc">
//                     {/* IMAGEN */}
//                     <img className="img" alt="product" src={Apple} />
//                 </div>

//                 <div className="ba b--yellow bw2 w-50">
//                     {/* NOMBRE */}
//                     <h1 className="f1">{product.name}</h1>
//                     <div className="f3 flex inline-flex ml2 ba b--white bw2 w-30">
//                         {/* PRECIO */}
//                         <p className="ma0 w-50">{product.price}</p>
//                         {/* CATEGORÍA */}
//                         <p className="ma0 w-50 i">{product.category}</p>
//                     </div>
//                     {/* DESCRIPCIÓN */}
//                     <p className="f3">{product.description}</p>
//                 </div>
//             </div>
//             <div className="tc flex justify-center">
//                 <div>
//                     <Link to="/dashboard">
//                         <button className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg">Regresar</button>
//                     </Link>
//                 </div>
//                 <div>
//                     <Link onClick={onButtonClick} to="/dashboard">
//                         <button className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg">Eliminar</button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default EliminarProducto

import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Apple from './apple.png';
import './EliminarProducto.css';

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
        fetch(`/api/${id}`)
            .then(res => res.json())
            .then(response => {
                setProduct(product = response[0])
                console.log(product)
            })
            .catch(err => console.log("Error, producto no encontrado", err))
    }, []);

    const onButtonClick = () => {
        //Fetch a /api/admin/delProduct/:id con POST
        fetch(`/api/admin/delProduct/${id}`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
            })
                .then(response => {
                    alert("Producto eliminado")
                })
    }

    return (
        <div>
            <div className="flex flex-row-ns flex-column justify-center w-100">
                <div className="w-30-ns w-100 tc">
                    {/* IMAGEN */}
                    <img className="img-show" alt="product" src={product.image} />
                </div>

                <div className="w-50-ns w-100">
                    {/* NOMBRE */}
                    <h1 className="f1">{product.name}</h1>
                    <div className="f3 flex flex-column flex-wrap ml2 w-30">
                        {/* PRECIO */}
                        <p className="ma0 w-50">Precio: ${product.price}</p>
                        {/* CATEGORÍA */}
                        <p className="ma0 w-50 i">{product.category}</p>
                    </div>
                    {/* DESCRIPCIÓN */}
                    <p className="f3">{product.description}</p>
                </div>
            </div>
            <div className="tc flex justify-center">
                <div>
                    <Link to="/dashboard">
                        <button className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg">Regresar</button>
                    </Link>
                </div>
                <div>
                    <Link onClick={onButtonClick} to="/dashboard">
                        <button className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg">Eliminar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EliminarProducto
