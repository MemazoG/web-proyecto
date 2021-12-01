import { Link } from "react-router-dom";
import AdminCardList from "../AdminCardList/AdminCardList";

const DashboardAdmin = ({ cards }) => {
    return (
        <div className="bg">
            <AdminCardList cards={cards} />

            <section className="center w-80 tc">
                <article className="pv4 bb b--black-10 ph3 ph0-l">
                    <div className="w-100 pr3-ns order-2 order-1-ns">
                        <Link className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg" to="/">Cerrar sesión</Link>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default DashboardAdmin;