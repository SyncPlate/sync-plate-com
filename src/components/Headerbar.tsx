"use client"

import Link from "next/link"
import { useWindowSize } from "../hooks/useWindowSize"
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { useMemo } from "react";
import useScrollAtTop from "../hooks/useScrollAtTop";

export function HeaderBar() {
  
  const size = useWindowSize()
  const atTop = useScrollAtTop(30)
  const MenuBar = useMemo(() => {
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
          display: "flex", flexDirection: "row", padding: 20, alignItems: "center", justifyContent:"center",
          gap: 10, fontSize: 20, color: "black",
          height:90
        }}>
          <IoMenu size={40} color="black"/>
        </div>
      )
    }
    return (
      <div style={{
        width:"100%", display: "flex", flexDirection: "row", padding: 20, alignItems: "center", justifyContent:"center",
        gap: 10, fontSize: 20, color: "black",
        height:90
      }}>
        {items.map((item) => (
          <Link key={item.label} href={item.href} style={{flex:1, fontWeight:"bold",height:"100%", display: "flex", justifyContent:"center", alignItems:"center"}}>
              {item.label}
          </Link>
        ))}
      </div>
    )
  }, [size.width])
  return (
    <div style={{
      zIndex: 200,
      marginTop:30,
      position: "sticky", top: 0, left: 0, right: 0,
      display: "flex", flexDirection: "row", padding: 20, alignItems: "center", justifyContent:"space-between",
      gap: 10, fontSize: 20, color: "black",
      height: 60, backgroundColor: atTop ? "transparent" : "#8ce299b4",
      boxShadow: atTop ? "" : "black 0px 0px 10px 0px", backdropFilter:atTop ? "" : "blur(5px)"
    }}>
      <div style={{
        width: 200,
        display: "flex", flexDirection: "row", padding: 20, alignItems: "center", gap: 10, fontSize: 20, color: "white",
      }}>
        <Image
            src="/web-app-manifest-512x512.png"
            alt="Next.js logo"
            width={50}
            height={50}
            priority
            style={{minWidth:50, width:50, minHeight:50, height:50}}
        />
        
        <span style={{
          textShadow:"0px 5px 5px black", fontWeight:"bold"
        }}>SyncPlate</span>
      </div>
      
      {MenuBar}

      <div style={{
        width: 200,
        display: size.width < 900 ? "none" :"flex", flexDirection: "row", padding: 20, alignItems: "center", gap: 10, fontSize: 20, color: "white",
      }}></div>
    </div>
  )
}