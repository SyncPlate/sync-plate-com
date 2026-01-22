"use client"

import { useRouter } from "next/router";

export function RecipeInfo() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div style={{color:"black"}}>
        recipe ID { id}
        </div>
    );
}