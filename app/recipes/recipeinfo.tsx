"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function RecipeInfo() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [recipe, setRecipe] = useState<{
        cook_time: number
        cover_photo_id: null
        createdAt: string
        description: string
        directions: string
        id: string
        ingrediants: string
        lastUpdated: string
        name: string
        notes: string
        prep_time: number
        summary: string
        visibility: "PUBLIC" | "PRIVATE"
    }|undefined>(undefined)
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
        <div style={{color:"black", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{paddingTop:50, width:"90%", maxWidth:900}}>
                <h1 style={{fontWeight:"bold", textAlign:"center"}}>{recipe?.name || "Loading recipe..."}</h1>
                <p>{recipe?.summary}</p>
                <div style={{paddingBottom:50}}>
                    <h3 style={{fontWeight:"bold"}}>Stats</h3>
                    <p>Prep: {recipe?.prep_time}</p>
                    <p>Cook: {recipe?.cook_time}</p>
                </div>
                <h3 style={{fontWeight:"bold"}}>Ingrediants</h3>
                <p style={{paddingBottom:50}}>{recipe?.ingrediants}</p>
                <h3 style={{fontWeight:"bold"}}>Directions</h3>
                <p style={{paddingBottom:50}}>{recipe?.directions}</p>
                <h3 style={{fontWeight:"bold"}}>Notes</h3>
                <p style={{paddingBottom:50}}>{recipe?.notes}</p>
            </div>
        </div>
    );
}