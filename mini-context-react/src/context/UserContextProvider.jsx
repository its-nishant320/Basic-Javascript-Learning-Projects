import React from "react";
import {UserContext} from './UserContext'

const UserContextProvider = ({children}) => {
    const [data, setdata] = React.useState(null);
    <UserContext.Provider value={{data,setdata}}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider