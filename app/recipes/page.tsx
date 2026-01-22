// import Image from "next/image";
// import Link from "next/link";

import { Suspense } from "react";
import { RecipeInfo } from "./recipeinfo";


export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecipeInfo />
    </Suspense>
  );
}
