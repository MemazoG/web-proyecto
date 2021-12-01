const AgregarProducto = () => {
    return (
        <div className="w-100 tc">
            <form className="pa4 black-80 flex flex-column flex-wrap items-center">
                {/* NOMBRE  ID --> name */}
                <div className="measure">
                    <label htmlFor="name" className="f5 b db mb2">Nombre del producto</label>
                    <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
                </div>
                <br />
                {/* CATEGORÍA  ID --> category */}
                <div className="measure">
                    <label htmlFor="category" className="f5 b db mb2">Categoría</label>
                    <select id="category" className="ba b--black-20 pa2 mb2 db w-100">
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
                    <textarea id="description" className="input-reset ba b--black-20 pa2 mb2 db w-100" rows="3" cols="30" />
                </div>
                <br />
                {/* PRECIO  ID --> price */}
                <div className="measure">
                    <label htmlFor="price" className="f5 b db mb2">Precio</label>
                    <input id="price" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
                </div>
                <br />
                {/* IMAGEN  ID --> image */}
                <div className="measure">
                    <label htmlFor="imagen" className="f5 b db mb2">Imagen</label>
                    <input id="image" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="file" />
                </div>
                <br />

                {/* SUBMIT BUTTON */}
                <div className="tc">
                    <button className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg">Agregar producto</button>
                </div>
            </form>
        </div>
    )
}

export default AgregarProducto
