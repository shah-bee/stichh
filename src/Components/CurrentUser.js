import React, { useContext } from 'react'
import { UserContext } from '../UserContext';

export const CurrentUser = () => {

    const user = useContext(UserContext);
    console.log({ });
    const { email, photoUrl } = user;
    return (
        <>
            <div>
                {email}
            </div>
            <img src={photoUrl}></img>
        </>
    )
}

export default CurrentUser;