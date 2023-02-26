import { useState } from "react"

export default function Form(){
    const [degreValue,setDegreValue]=useState(0);
    const [FaradValue,setFaradValue]=useState(0);
   function handleDegreChange(e){
    let tmp=document.querySelector('.degre').value
    // setFaradValue(tmp)
    tmp=parseInt(tmp);
    tmp+=2
    document.querySelector('.farad').value=tmp;
   }
   function handleFaradChange(e){
    let tmp2=document.querySelector('.farad').value
    // setFaradValue(tmp2)
    tmp2=parseInt(tmp2);
    tmp2+=2
    document.querySelector('.degre').value=tmp2;
   }

    return(
        <div className="box">
            <div className="container">

                <div className="top">
                    <header>Convertisseur</header>
                </div>

                <div className="input-field">
                    <input type="num" onChange={handleDegreChange} className="input degre"  placeholder="Degre" />
                </div>

                <div className="input-field">
                    <input type="num" className="input farad" onChange={handleFaradChange}  placeholder="Faradey"/>
                </div>

                <div className="input-field">
                    <input type="submit" className="submit" value="changer" id="" />
                </div>

            </div>
        </div>  
    )
}