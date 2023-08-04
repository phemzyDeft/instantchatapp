import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase";


// create context
const AuthContext = createContext()

// context provider
export const AuthProvider = ({children}) => {
    const [currentUser, setcurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)


    //sign in with google
    const SignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    // logout user
    const logout = () => signOut(auth)

    // current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setcurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser, setcurrentUser, SignIn, logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const userAuth = () => {
    return useContext(AuthContext)
}