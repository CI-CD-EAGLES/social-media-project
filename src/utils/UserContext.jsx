import React, { useState, useEffect, useContext, createContext } from "react";


const UserContext = createContext();

export function useAuth(){
    return useContext(UserContext)
}
export function AuthProvider(props){
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}