import { Link } from 'react-router-dom';
import './Inicio.css';
import Chocolate from './chocolate2.jpg';
import PedidoGrande from './pedidogrande_orig.jpg';

const Inicio = () => {
    return (
        <div className="tc">
            <section className="center w-80 tc">

                {/* SECCIÓN     -   SWEET ICE*/}
                <article className="pv4 ph3 ph0-l">
                    <div className="w-100 pr3-ns order-2 order-1-ns">
                        <h1 className="f2 mt0 lh-title ttu">Sweet Ice</h1>
                        <h1 className="f4 mt0 lh-title ttu">Auténticos helados mexicanos</h1>
                    </div>
                </article>

                {/* SECCIÓN     -   HELADOS ÚNICOS POR SU SABOR*/}
                <article className="pv4 bt bb b--black-10 ph3 ph0-l">
                <h1 className="f2 mt0 lh-title ttu">Helados únicos por su sabor</h1>
                    <div className="flex flex-row-ns flex-column items-center">
                        <div className="w-100 w-70-ns pr3-ns order-2 order-1-ns">
                            <p className="f5 f4-l lh-copy">
                                Somos un negocio de helados dedicados a brindar el mejor sabor posible con los ingredientes de mejor calidad.
                                Contamos con una gran variedad de sabores y tipos de helados para que nuestros clientes tengan una amplia gama de sabores de la cual escoger.
                            </p>
                        </div>
                        <div className="pl3-ns order-2 mb4 mb0-ns w-100 w-30-ns">
                            <img src={Chocolate} alt="Producto" />
                        </div>
                    </div>
                </article>

                {/* SECCIÓN     -   CONOCE NUESTROS SABORES*/}
                <article className="pv4 bt bb b--black-10 ph3 ph0-l">
                <h1 className="f2 mt0 lh-title ttu">Conoce nuestros sabores</h1>
                    <div className="flex flex-column flex-row-ns items-center">
                        <div className="w-100 w-70-ns pr3-ns order-2 order-1-ns">
                            <p className="f5 f4-l lh-copy">
                                Contamos con una variedad enorme de productos para satisfacer todo tipo de paladares ¡Da un recorrido por nuestro menú y elige el de tu preferencia!
                            </p>
                        </div>
                        <div className="pl3-ns order-2 order-0-ns mb4 mb0-ns w-100 w-30-ns">
                            <img src={PedidoGrande} alt="Producto" />
                        </div>
                    </div>
                </article>

                {/* SECCIÓN     -   CONTACTO*/}
                <article className="pv4 bb b--black-10 ph3 ph0-l">
                    <div className="w-100 pr3-ns order-2 order-1-ns">
                        <h1 className="f2 mt0 lh-title ttu">¿Tienes alguna duda o sugerencia?</h1>
                        <p className="f5 f4-l lh-copy">
                            No dudes en contactarnos, tu opinión es muy importante para nosotros, y tomamos en cuenta cada uno de los comentarios
                            que recibimos para mejorar nuestro servicio.
                        </p>
                        <Link className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg" to="/contacto">Contáctanos</Link>
                    </div>
                </article>

            </section>

        </div>
    )
}

export default Inicio;