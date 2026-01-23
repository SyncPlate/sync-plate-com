// import Image from "next/image";
// import Link from "next/link";

import { Suspense } from "react";
import { RecipeInfo } from "./recipeinfo";


export default function Home() {
  return (
    <main style={{minHeight:500}}>
      <Suspense fallback={<div>Loading...</div>}>
        <RecipeInfo />
      </Suspense>
    </main>
  );
}
