import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ECFFEF] font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-5 py-20 px-16 bg-[#8CE299]">
        <div style={{width:100, height:100}}>
          <Image
            className="dark:invert"
            src="/icon-transparent.png"
            alt="Next.js logo"
            width={200}
            height={200}
            priority
            style={{minWidth:200, width:200, minHeight:200, height:200}}
          />
        </div>
        <h1 className="text-shadow-lg max-w-md text-center text-5xl font-semibold leading-10 tracking-tight text-white">
          Sync Plate
        </h1>
        <h2 className="text-shadow-lg max-w-md text-center text-2xl font-semibold leading-10 tracking-tight text-white">
          Plates, People, Plans
        </h2>
        
      </main>
    </div>
  );
}
