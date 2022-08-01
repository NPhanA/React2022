import { useState } from "react";

export default function ClickCount(){
    const [Name, setName] = useState("Hoa");
    return(
        <div className="container pt-5">
        <span>{count}</span>
        <button className="btn btn-primary btn-sm" onClick={() =>{setCount(count+1)}}>Increase by one</button>
    </div>
    )
    
} 




export default function ChangeName(){
    const [Name, setName] = useState("Hoa");
    return(
     <div className="container">
        <span>{Name}</span>
        <button className="btn btn-primary btn-sm" onClick={() =>{setName("Lan")}}>s</button>
     </div>


    )
}




