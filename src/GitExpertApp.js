import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GitExpertApp = () => {
    // const categories = ["One Punch", "Samurai x", "Dragon Ball"];
    const [categories, setCategories] = useState (["Stray Kids"]);
    
    // const handleAdd = () =>{
    //     setCategories([...categories, "HunterxHunter"]);
    // }


    return(
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}


            <ol>
                {
                    categories.map(category => 
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
  }