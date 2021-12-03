// import { React, useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import Apple from './apple.png';
// import './PaginaProducto.css';

// function PaginaProducto() {
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

//     return (
//         <div className="flex justify-center w-100">
//             <div className="ba b--white bw2 w-30 tc">
//                 {/* IMAGEN */}
//                 <img className="img" alt="product" src={Apple} />
//             </div>

//             <div className="ba b--yellow bw2 w-50">
//                 {/* NOMBRE */}
//                 <h1 className="f1">{product.name}</h1>
//                 <div className="f3 flex inline-flex ml2 ba b--white bw2 w-30">
//                     {/* PRECIO */}
//                     <p className="ma0 w-50">{product.price}</p>
//                     {/* CATEGORÍA */}
//                     <p className="ma0 w-50 i">{product.category}</p>
//                 </div>
//                 {/* DESCRIPCIÓN */}
//                 <p className="f3">{product.description}</p>
//             </div>
//         </div>
//     )
// }

// export default PaginaProducto


import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Apple from './apple.png';
import './PaginaProducto.css';

function PaginaProducto() {
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
                console.log("Info del producto", product)
            })
            .catch(err => console.log("Error, producto no encontrado", err))
    }, []);

    return (
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
    )
}

export default PaginaProducto
