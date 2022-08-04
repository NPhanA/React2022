import { useState, useState } from "react";

export default function Timer() {

    let [timer, setTimer] = useState(10);

    useEffect(() => {
        setTimer(timer - 1);
    }, 1000);

    return (
        <div className="container">
            <button type="button" onClick={useEffect()} className="btn btn-primary">Start</button>
        </div>
    )



}