"use client"

import { useCallback, useState } from "react"

export function MailingListSplash() {
    const [email, setEmail] = useState("")
    const [showMsg, setShow] = useState(false)
    const joinList = useCallback(() => {
        console.log("joining mailing list", email)
        setShow(true)
        setEmail("")
    }, [email])
    return (
        <div style={{
            width: "90%", maxWidth: 700, backgroundColor: "#10654E", color:"white", padding: 20, paddingTop: 10, paddingBottom: 10, gap: 10, borderRadius: 10, display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <span className="text-sm md:text-2xl"  style={{ fontWeight:"bold"}}>Get Notified On Release</span>
            <div style={{display:"flex", width:"100%", gap: 10}}>
                <input
                    className="text-xs md:text-xl"
                    style={{ color:"black",width: "90%", backgroundColor: "white", padding: 3, paddingLeft: 10, borderRadius: 5 }}
                    placeholder="Enter your email to join our mailing list"
                    autoComplete="email"
                    autoCapitalize="false"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                ></input>
                <button className="text-xs md:text-xl" style={{
                    backgroundColor:"#ECFFEF",borderRadius: 5, cursor:"pointer", color:"black",
                    display: "flex", justifyContent: "center", alignItems: "center", padding: 3, paddingLeft: 10, paddingRight: 10,
                }} onClick={joinList}>
                    Join
                </button>
            </div>
            <p style={{ width: "100%", fontSize: 12, opacity: showMsg ? 1 : 0 }}>Thank you for joining!</p>
        </div>
    )
}