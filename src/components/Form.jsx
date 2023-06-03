import { useState } from "react"
import Bouillon from "./Bouillons";

export default function Form({id1,id2}){
    const [degreValue,setDegreValue]=useState(0);
    const [FaradValue,setFaradValue]=useState(0);

    let select1=document.querySelector(`#${id1}`).value;
    let select2=document.querySelector(`#${id2}`).value;

   function changeDegre(e){
    setDegreValue(e.target.value)
    if(e.target.value===""){
        e.target.value=0
    }
    let tmp=e.target.value;
    tmp=parseFloat(tmp)
    let far=(tmp*9/5)+32
    setFaradValue(far)
   }

   function handleFaradChange(e){
    setFaradValue(e.target.value)
    if(e.target.value===""){
        e.target.value=0
    }
    let tmp=e.target.value
    tmp=parseFloat(tmp)
    let deg=(tmp-32)*5/9
    setDegreValue(deg)
   }

    return(
        <div className="box">
            <div className="container">

                <div className="top">
                    <header>Convertisseur</header>
                </div>

                <div className="input-field">
                    <input type="num" className="input degre" value={degreValue} onChange={changeDegre} />
                </div>

                <div className="input-field">
                    <input type="num" className="input farad" onChange={handleFaradChange} value={FaradValue}/>
                </div>
                <div className="input-field boullon">
                    <input type="text" className="input farad" />
                </div>

            </div>
        </div>  
    )
}