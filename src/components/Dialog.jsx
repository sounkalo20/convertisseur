export default function Dialog({id1,id2}){
    return(
        <div className="zone" >
            <select name="" id={id1}>
                <option value="d">degre</option>
                <option value="f">Farhad</option>
                <option value="K">Kelvin</option>
            </select>
            <select name="" id={id2}>
                <option value="f">Farhad</option>
                <option value="d">degre</option>
                <option value="k">Kelvin</option>
            </select>
        </div>
    )
}