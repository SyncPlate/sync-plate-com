import { useEffect, useState } from "react";

export function useWindowSize() {
    const [size, setSize] = useState({ width: 0, height: 0 })
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSize({
            width: window.innerWidth,
            height:window.innerHeight
        })
        const listener = () => {
            setSize({
                width: window.innerWidth,
                height:window.innerHeight
            })
        }
        window.addEventListener("resize", listener, false)
        
        return () => {
            window.removeEventListener("resize", listener, false)

        }
    }, [])

    return size;
}