import { Link } from "react-router-dom";
import AdminCardList from "../AdminCardList/AdminCardList";

const DashboardAdmin = ({ cards }) => {
    const handleLogout = () => {
        fetch(`http://localhost:9000/api/admin/logout`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            //credentials: "include",
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log("ERROR", err))
    }

    return (
        <div className="bg">
            <section className="center w-80 tc">
                <article className="pv4 bb b--black-10 ph3 ph0-l">
                    <div className="w-100 pr3-ns order-2 order-1-ns">
                        <Link className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg" to="/agregar-producto">Nuevo producto</Link>
                    </div>
                </article>
            </section>

            <AdminCardList cards={cards} />

            <section className="center w-80 tc">
                <article className="pv4 bb b--black-10 ph3 ph0-l">
                    <div className="w-100 pr3-ns order-2 order-1-ns">
                        <Link onClick={handleLogout} className="f3 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg" to="/login">Cerrar sesión</Link>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default DashboardAdmin;