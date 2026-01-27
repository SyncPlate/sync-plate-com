"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function RecipeInfo() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [recipe, setRecipe] = useState()
    useEffect(() => {
        const getRecipe = async () => {
            const res = await fetch(`https://api.sync-plate.com/v1.0.0/api/recipes/${id}`);
            const recipe = await res.json();
            console.log("recipe", recipe)
            setRecipe(recipe)
        }
        getRecipe()
        const interval = setInterval(getRecipe, 30 * 1000);
        return () => clearInterval(interval);
    }, [])
    return (
        <div style={{color:"black"}}>
        recipe ID {id}
        </div>
    );
}