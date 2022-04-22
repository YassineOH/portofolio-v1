import { useState, useEffect } from 'react';

export const useScreenWidth = (limit) => {
    // if (typeof window !== undefined) {

    const [width, setWidth] = useState("")
    const checkWidth = () => setWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", checkWidth)
        return () => window.removeEventListener("resize", checkWidth)
    }, [])

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    if (width > limit) {
        return false
    }

    return true
    // }

}