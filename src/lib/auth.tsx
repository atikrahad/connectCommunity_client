'use client'
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import auth from "./firebase"


export const useUser = async () => {
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