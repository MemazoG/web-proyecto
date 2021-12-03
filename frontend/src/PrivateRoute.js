import { Navigate } from 'react-router-dom';
import React from 'react'
import useAuth from './auth/useAuth';

//const user = null;
//const user = {id: 1, username: "luis"}

export default function PrivateRoute({ children }) {
    const auth = useAuth();

    //const auth = false;
    return auth.isLogged() ? children : <Navigate to="/login" />
}
