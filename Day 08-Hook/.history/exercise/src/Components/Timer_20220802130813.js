import { useState, useState } from "react";

export default function Timer() {

    let [timer, setTimer] = useState(10);

    useEffect(() => {
        const setInterval = () => {
            setTimer(timer - 1);
        };
    }, 1000);
   
        return (
            <div className="container">
                <button type="button" onClick={setTimer} className="btn btn-primary">Start</button>
            </div>
    )



}