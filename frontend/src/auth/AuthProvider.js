import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const contextValue = {
        user,
        //LLAMADO PARA HACER LOGIN
        login(email, password) {
            //Hacer fetch
            fetch(`http://localhost:9000/api/admin/login`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                //credentials: "include",
                body: JSON.stringify({
                    username: email,
                    password: password
                })
            })
                .then(response => response.json())
                .then(admin => {
                    if (admin.username) {
                        //Usuario ahora puede entrar a las rutas protegidas
                        setUser({ username: admin.username })
                        console.log("Usuario autenticado!")
                    }
                })
        },
        //LLAMADO PARA HACER LOGOUT
        logout() {
            //Hacer fetch
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
            
            //Estado de usuario se hace null para que no se puede entrar a rutas protegidas
            setUser(null);
        },
        isLogged() {
            return !!user;
        }
    }

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;