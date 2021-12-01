const Contacto = () => {
    return (
        <div className="tc">
            <section className="center w-80 tc">
                <article className="pv4 ph3 ph0-l">
                    <div className="w-100 pr3-ns order-2 order-1-ns">
                        <h1 className="f2 mt0 lh-title ttu">Contáctanos</h1>
                        <p className="f5 f4-l lh-copy">
                            ¡Tus dudas, sugerencias y observaciones son muy valiosas para nosotros!
                        </p>
                        <p className="f5 f4-l lh-copy">
                            ¡Además, si lo que requieres es realizar algún pedido especial, no dudes en contactarnos por correo o en nuestra página en Facebook!
                        </p>
                    </div>
                </article>

                <article className="pv4 bt bb b--black-10 ph3 ph0-l">
                    <div className="w-100 pr3-ns order-2 order-1-ns">
                        <p className="f5 f4-l lh-copy">
                            Envíanos un correo a <span className="b i">dianadmtz@hotmail.com</span> y nos pondremos en contacto contigo lo más pronto posible.
                        </p>
                    </div>
                </article>
            </section>

            <footer className="pv4 ph3 ph5-ns tc">
                <a className="link dim gray dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--black-10" href="https://www.facebook.com/Sweetice.mty/" target="_blank" rel="noopener noreferrer">
                    <svg data-icon="facebook" viewBox="0 0 32 32">
                        <title>facebook icon</title>
                        <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
                    </svg>
                </a>
            </footer>

        </div>
    )
}

export default Contacto;