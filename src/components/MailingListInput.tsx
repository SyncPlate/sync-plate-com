"use client"

import { useCallback, useState } from "react"

export function MailingListInput() {
    const [email, setEmail] = useState("")
    const [sending, setSending] = useState(false)
    const [msg, setMsg] = useState<string | undefined>(undefined)
    const joinList = useCallback(async () => {
        console.log("joining mailing list", email)
        setSending(true)
        try {

            const res = await fetch(`https://api.sync-plate.com/v1.0.0/api/mailinglist`, {
                method: "POST", body: JSON.stringify({ email }),
                headers: {"Content-Type":"application/json"}
            })
            if (res.status == 200) {
                setMsg("Email added to waitlist!")
                setEmail("")
            } else {
                throw "bad req"
            }
        } catch (e) {
            setMsg("Wasn't able to add email to mailing list")
            
        }
        setSending(false)
    }, [email])
    return (
        <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
            <div style={{display:"flex", flexDirection:"row", width:"100%", gap:10}}>
                <input
                    className="text-xs md:text-sm"
                    style={{ flex: 8, backgroundColor: "white", color:sending ? "#000000af" :"black", paddingLeft:10, paddingRight:10, height: 30, borderRadius: 5 }}
                    placeholder="Enter your email address"
                />
                <button disabled={sending} className="text-xs md:text-sm" style={{
                    opacity: sending ? 0.5 : 1,
                    paddingLeft:10, paddingRight:10, color:"black",
                    flex: 1, backgroundColor: "#ECFFEF", borderRadius: 5, cursor: "pointer"
                }} onClick={joinList}>Subscribe</button>
            </div>
            <p style={{opacity: msg !== undefined ? 1 : 0, fontSize:13}}>{msg !== undefined ? msg : "Space holding text"}</p>
        </div>
    )
}