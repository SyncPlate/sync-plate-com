// import Image from "next/image";
// import Link from "next/link";

export default function Home() {

  return (
    <div>
      <main style={{minHeight:500}}>
        <div style={{
          display: "flex", width: "100%", flexDirection: "column", height: 500, justifyContent: "center", alignItems: "center"
        }}>
          <div style={{
            maxWidth: 500, display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center",
            gap:20
          }}>
            <h1 style={{fontSize:30, fontWeight:"bold",}}>Page Under Construction</h1>
            <p style={{textAlign:"center"}}>This page is currently just a placeholder. Please check back soon to view what becomes of this page</p>
          </div>
        </div>
      </main>
    </div>
  );
}
