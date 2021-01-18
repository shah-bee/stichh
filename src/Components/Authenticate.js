import React, { useContext, useState } from 'react'
import Login from './Login/Login'
import CurrentUser from './CurrentUser'
import { UserContext } from '../UserContext'


export const Authenticate = () => {

    const user = useContext(UserContext);

    return (
        <>
            {  user.isLoggedIn ? <CurrentUser user={user} /> : <Login />}
        </>
    )
}

export default Authenticate;