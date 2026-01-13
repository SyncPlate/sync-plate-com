"use client"

import Link from "next/link"
import { useWindowSize } from "../hooks/useWindowSize"

export function HeaderBar() {
  
  const size = useWindowSize()
  const items = [
    { label: "Home", href:"/" },
    { label: "Features", href:"/" },
    { label: "Screenshots", href:"/screenshots" },
    { label: "Pricing", href:"/" },
    { label: "FAQ", href:"/" },
    { label: "Contact", href:"/" },
  ]
  if (size.width < 900) {

    return (
      <div style={{
        position: "absolute", top: 0, right: 0,
        display: "flex", flexDirection: "row", padding: 20, alignItems: "center", justifyContent:"center",
        gap: 10, fontSize: 20, color: "black",
        height:90
      }}>
        Menu
        
      </div>
    )
  }
  return (
    <div style={{
      position: "absolute", top: 0, left: "20%", right: "20%",
      display: "flex", flexDirection: "row", padding: 20, alignItems: "center", justifyContent:"center",
      gap: 10, fontSize: 20, color: "black",
      height:95
    }}>
      {items.map((item) => (
        <Link key={item.label} href={item.href} style={{flex:1, height:"100%", display: "flex", justifyContent:"center", alignItems:"center"}}>
            {item.label}
        </Link>
      ))}
      
    </div>
  )
}