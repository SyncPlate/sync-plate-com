import Image from "next/image";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { MailingListInput } from "./MailingListInput";

export function Footer() {

    return (
        <div  style={{ color:"white", backgroundColor: "#303030", display:"flex", flexDirection:"column", alignItems:"center" }}>
            <div className="pb-[100px] md:pb-[200px]" style={{ width: "85%", maxWidth: 1200 }}>
                <div className="flex-col lg:flex-row" style={{
                    display: "flex", justifyContent: "space-between", gap:20,
                    borderBottom: "1px solid white", paddingTop: 20, paddingBottom: 20
                }}>
                    <div style={{
                        display: "flex", flexDirection: "column", gap: 20,
                        
                    }}>
                        <div style={{
                            display: "flex", flexDirection: "row", alignItems: "center", gap: 10, fontSize: 20, color: "white",
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
                        <p className="text-sm md:text-xl">Your digital cookbook and collaborative meal planner</p>
                        <p className="text-sm hidden md:flex">©2026 Keegan Bruer, All Rights Reserved</p>
                    </div>
                    <div style={{
                        display: "flex", flexDirection: "column", gap: 20, justifyContent:"flex-end", flex:1, maxWidth:450,
                    }}>
                        <span className="text-sm md:text-xl" style={{fontWeight:"bold"}}>Stay Updated</span>
                        <MailingListInput />
                        <div className="hidden md:flex" style={{height:14}}></div>
                    </div>
                </div>
                <div
                    className="flex-col-reverse gap-[40px] md:gap-[0px] md:flex-row items-center md:items-start"
                    style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
                >
                    <div style={{display:"flex", flexDirection:"row", gap:20}}>
                        <a href="https://www.instagram.com/syncplate/">
                            <FaInstagram size={40}/>
                        </a>
                        <a href="https://www.youtube.com/@syncplate">
                            <FaYoutube size={40}/>
                        </a>
                        <a href="https://www.tiktok.com/@syncplate">
                            <FaTiktok size={40}/>
                        </a>
                    </div>
                    <div className="text-xs md:text-base" style={{flex:1, display:"flex", flexDirection:"row", gap:20, justifyContent:"flex-end"}}>
                        <div style={{display:"flex", flexDirection:"column", minWidth:70, gap:10}}>
                            <span style={{fontWeight:"bold"}}>Developer</span>
                            <a href="https://keeganbruer.com" target="_blank">About</a>
                            <a href="https://keeganbruer.com/Articles" target="_blank">Blog</a>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", minWidth:100, gap:10}}>
                            <span style={{fontWeight:"bold"}}>Help</span>
                            <a>Support</a>
                            <a href="/docs/privacy-policy">Privacy Policy</a>
                            <a href="/docs/terms-of-service">Terms of Service</a>
                            <a href="/FAQ">FAQ</a>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", minWidth:133, gap:10}}>
                            <span style={{fontWeight:"bold"}}>Support</span>
                            <p>support@sync-plate.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-sm flex md:hidden">@2025 Keegan Bruer, All Rights Reserved</p>
        </div>
    )
}