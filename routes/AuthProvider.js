import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [userName, setuserName] = useState(null);
    const [userData, setuserData] = useState(null);
    const [lvl, setlvl] = useState(0);
    const [addScore, setaddScore] = useState(0);
    const [subScore, setsubScore] = useState(0);
    const [mulScore, setmulScore] = useState(0);
    const [divScore, setdivScore] = useState(0);
    const [netScore, setnetScore] = useState(0);


    return (
        <AuthContext.Provider value={{
            user, setuser,
            userName, setuserName,
            userData, setuserData,
            lvl, setlvl,
            addScore, setaddScore,
            subScore, setsubScore,
            mulScore, setmulScore,
            divScore, setdivScore,
            netScore, setnetScore
        }}>
            {children}
        </AuthContext.Provider>
    );
};