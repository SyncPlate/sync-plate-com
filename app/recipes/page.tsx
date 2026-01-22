// import Image from "next/image";
// import Link from "next/link";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div style={{color:"black"}}>
      recipe ID { id}
    </div>
  );
}
