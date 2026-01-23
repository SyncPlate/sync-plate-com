"use client"

import { useMemo, useState } from "react"

export function PricingContent() {
    const [toggle, setToggle] = useState(0)
    const info = useMemo(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const thisOr = (val1:any, val2:any) => {
            if (toggle == 1) return val2;
            return val1;
        }
        return {
            prices: {
                pro:thisOr("$2 /month", "$20 /year"),
                family:thisOr("$7 /month", "$70 /year")
            }
        }
    }, [toggle])
    return (
        <div style={{
            paddingTop:50,
          display: "flex", width: "100%", flexDirection: "column", alignItems: "center", gap:20
        }}>
            <h1 style={{fontSize:30, fontWeight:"bold"}}>Plans and Pricing</h1>
            <p>Support a solo developer and unlock full backup & sharing functionalities</p>
            <div style={{
                cursor: "pointer", position: "relative", width: 300, backgroundColor: "grey", borderRadius: 10,
                boxShadow:"black 0px 2px 5px 0px"
            }} onClick={() => setToggle(toggle == 1? 2: 1)}>
                <div style={{zIndex:10, position:"absolute", top:0, left:0, right:0, height:"100%", padding:3}}>
                    <div style={{
                        animation: toggle === 1 ? "slide-right 0.2s ease-in-out forwards" : toggle === 2 ? "slide-left 0.2s ease-in-out forwards" : "",
                        width: "49%", height: "100%", backgroundColor: "lightgray", borderRadius: 10
                    }}></div>
                </div>
                <div style={{
                    borderWidth:1, borderColor:"white",
                    position: "absolute", top: -10, right: -30, color: "white", zIndex: 22, backgroundColor: "grey", borderRadius: 5, paddingLeft: 5, paddingRight: 5
                }}>
                    17% Off
                </div>
                <div style={{
                    position:"relative", zIndex:20,
                    width: "100%",
                    display: "flex",
                    padding: 5,
                    justifyContent:"space-between"
                }}>
                    <div style={{
                        display: "flex", justifyContent: "center", alignItems: "center",
                        width: "49%", height: "100%", borderRadius: 10
                    }}>Monthly</div>
                    <div style={{
                        display: "flex", justifyContent: "center", alignItems: "center",
                        width: "49%", height: "100%", borderRadius: 10
                    }}>Anual</div>
                </div>
            </div>
            <div></div>
            <div className="flex-col lg:flex-row" style={{display:"flex", maxWidth:1000, width:"80%", gap:30}}>
                <div style={{
                    borderRadius: 10, backgroundColor: "#8CE299", flex: 1, height: 500, padding: 20,
                    fontSize: 30, fontWeight: "bold", color: "white", gap: 10, display: "flex", flexDirection: "column",
                    boxShadow:"black 0px 3px 15px -2px"
                }}>
                    <h2>Free</h2>
                    <span style={{fontWeight:"normal"}}>$0</span>
                    <ul style={{fontWeight:"normal", fontSize:17, gap:5, display:"flex", flexDirection:"column", listStyleType:"unset", listStylePosition:"inside"}}>
                        <li>Unlimited Offline Recipes!</li>
                        <li>10 Online & Sharable Recipes</li>
                        <li>1 Shared Meal Plan</li>
                    </ul>
                </div>
                <div style={{
                    borderRadius: 10, backgroundColor: "#8CE299", flex: 1, height: 500, padding: 20,
                    fontSize: 30, fontWeight: "bold", color: "white", gap: 10, display: "flex", flexDirection: "column",
                    boxShadow:"black 0px 3px 15px -2px"
                }}>
                    <h2>Pro</h2>
                    <span style={{fontWeight:"normal"}}>{info.prices.pro}</span>
                    <ul style={{fontWeight:"normal", fontSize:17, gap:5, display:"flex", flexDirection:"column", listStyleType:"unset", listStylePosition:"inside"}}>
                        <li>Real-Time Grocery Lists</li>
                        <li>200 Online Recipes</li>
                        <li>20 Shared Meal Plan</li>
                    </ul>
                </div>
                <div style={{
                    borderRadius: 10, backgroundColor: "#8CE299", flex: 1, height: 500, padding: 20,
                    fontSize: 30, fontWeight: "bold", color: "white", gap: 10, display: "flex", flexDirection: "column",
                    boxShadow:"black 0px 3px 15px -2px"
                }}>
                    <h2>Family</h2>
                    <span style={{fontWeight:"normal"}}>{info.prices.family}</span>
                    <ul style={{fontWeight:"normal", fontSize:17, gap:5, display:"flex", flexDirection:"column", listStyleType:"unset", listStylePosition:"inside"}}>
                        <li>Includes 6 pro subscriptions</li>
                    </ul>
                </div>
            </div>
            <div style={{height:100}} />
        </div>
    )
}
