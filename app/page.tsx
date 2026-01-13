import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const items = [
    { label: "Home", href:"/" },
    { label: "Features", href:"/" },
    { label: "Screenshots", href:"/screenshots" },
    { label: "Pricing", href:"/" },
    { label: "FAQ", href:"/" },
    { label: "Contact", href:"/" },
  ]
  return (
    <div>
      <div style={{overflow:"hidden", borderRadius:40, position:"relative", height: 800, margin:10}}>
        <div style={{
          background: "linear-gradient(-103deg,transparent 40%, rgba(140, 226, 153, 1) 100%)",
          position: "absolute", top: 0, left: 0, width: "50%", bottom:0
        }}></div>
        <div style={{
          background: "linear-gradient(103deg,transparent 40%, rgba(140, 226, 153, 1) 100%)",
          position: "absolute", top: 0, right: 0, width: "50%", bottom:0
        }}></div>
        <div style={{
          position: "absolute", top: 0, left: 0,
          display: "flex", flexDirection: "row", padding: 20, alignItems: "center", gap: 10, fontSize: 20, color: "white",

        }}>
          <Image
              className="dark:invert"
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
        
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center",
          gap: 10, fontSize: 20, color: "black",
          height:90, paddingTop:200
        }}>
          <h1 style={{ fontSize: 40, color: "white", textShadow: "0px 3px 15px black", fontWeight: "bold" }}>
            Making Cooking Collaborative
          </h1>
          <p style={{ maxWidth: 500, textAlign:"center" }}>
            SyncPlate helps you gather and share recipes, plan daily and holiday dinners, and keeps everyone on the same plate 😊
          </p>
        </div>
        <Image
          src="/app-tri-demo.png"
          alt="Next.js logo"
          width={600}
          height={377}
          priority
          style={{position:"absolute", bottom:0, left:"50%", translate:"-50% 0"}}
        />
          
        <div style={{
          position: "absolute", top: 0, left: "20%", right: "20%",
          display: "flex", flexDirection: "row", padding: 20, alignItems: "center", justifyContent:"center",
          gap: 10, fontSize: 20, color: "black",
          height:90
        }}>
          {items.map((item) => (
            <Link key={item.label} href={item.href} style={{flex:1, height:"100%", display: "flex", justifyContent:"center", alignItems:"center"}}>
                {item.label}
            </Link>
          ))}
          
        </div>
      </div>
      <main style={{minHeight:500}}>

      </main>
    </div>
  );
}
