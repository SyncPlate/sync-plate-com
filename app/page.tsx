import { useWindowSize } from "@/src/hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import { HeaderBar } from "@/src/components/Headerbar"
import { MailingListSplash } from "@/src/components/MailingListSplash";

export default function Home() {
  return (
    <div>
      <div className="h-[600px] sm:h-[800px] rounded-[20px] md:rounded-[40px]" style={{overflow:"hidden", position:"relative", margin:10}}>
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
          display: "flex", flexDirection: "column", alignItems: "center",
          gap: 10, fontSize: 20, color: "black",
          paddingTop:120
        }}>
          <h1 className="text-xxl md:text-4xl" style={{ color: "white", textShadow: "0px 3px 15px black", fontWeight: "bold" }}>
            Making Cooking Collaborative
          </h1>
          <div style={{height:10}}></div>
          <p className="text-sm md:text-2xl" style={{ maxWidth: 700, width:"90%", textAlign:"center" }}>
            SyncPlate helps you gather and share recipes, plan daily and holiday dinners, and keeps everyone on the same plate 😊
          </p>
          <div style={{height:20}}></div>
              <MailingListSplash />
          
        </div>
        <Image
          src="/app-tri-demo.png"
          alt="Next.js logo"
          width={600}
          height={377}
          priority
          className="w-[300px] sm:w-[450px] md:w-[600px]"
          style={{position:"absolute", bottom:0, left:"50%", translate:"-50% 0"}}
        />
        
        <HeaderBar />
      </div>
      <main style={{minHeight:500}}>

      </main>
    </div>
  );
}
