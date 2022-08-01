import { useState } from "react";

export default function ClickCount(){
    const [count, setCount] = useState("Hoa");
    return(
        <div className="container pt-5">
        <span>{count}</span>
        <button className="btn btn-primary btn-sm" onClick={() =>{setCount(count+1)}}>Increase by one</button>
    </div>
    )
    
} 








