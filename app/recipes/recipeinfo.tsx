"use client"

import { useSearchParams } from "next/navigation";

export function RecipeInfo() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    return (
        <div style={{color:"black"}}>
        recipe ID {id}
        </div>
    );
}