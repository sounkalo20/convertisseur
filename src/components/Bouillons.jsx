import { useState } from "react"

export default function Bouillon({temperature}){
   
    return(
                <div className="input-field">
                    <input type="text" className="input boue" placeholder="...." value={temperature>=1000?"l'eau boue":"l'eau ne boue pas"} />
                </div>
    )
}