import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export function AuthProvider({children}){
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const login = ()=> setIsAuthenticate(true)
    const logout = ()=> setIsAuthenticate(false)

 return(
    <AuthContext.Provider value={{isAuthenticate, login, logout}}>
        {children}
    </AuthContext.Provider>
 )
}
export function useAuth(){
    return useContext(AuthContext)
}