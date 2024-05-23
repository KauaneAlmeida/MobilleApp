import React, { createContext, useEffect, useState, ReactNode } from "react"

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

type AuthContextProps = {
    signed: boolean, 
    handleSigned: (data: boolean) => void,
    loading: boolean, 
    requireLoading: (data: boolean) => void ,
    user: IUser, 
    userData: (data: IUser) => void, 
    logout: () => void,
    handleErrorMsg: (data: any) => void,
    errorMsg: string,
}

interface IProps {
    children: ReactNode
}

interface IUser {
    id: number,
    name: string,
}

export function AuthProvider({children}: IProps) {

    const [signed, setSigned] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<IUser>({
        id: 0,
        name: "",
    })
    const [errorMsg, setErrorMsg] = useState("")

    
    const requireLoading = (data: boolean) => {
        setLoading(data)
    }

    const userData = async (data: IUser) => {
        setUser(data)
    }

    const handleSigned = (data: boolean) => {
        setSigned(data)
    }

    const logout = () => {
        setSigned(false)
    }

    const handleErrorMsg = (data: any) => {
        
        setErrorMsg(data)

        setTimeout(() => {
            setErrorMsg("")
        }, 2000)

    }

    return (
        <AuthContext.Provider value={{
            signed, 
            handleSigned,
            loading, 
            requireLoading,
            user, 
            userData, 
            logout,
            errorMsg,
            handleErrorMsg,
        
        }}>{children}</AuthContext.Provider>
    )
}

export default AuthContext;