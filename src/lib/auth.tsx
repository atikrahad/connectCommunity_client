'use client'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import auth from "./firebase"

export const logout = async()=>{
    return signOut(auth)
}

export const useUser = () => {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.email)
                setLoading(false)
            } else {
                setUser(null)
            }
        })
        return unsubscribe
    }, [])
    return user
}