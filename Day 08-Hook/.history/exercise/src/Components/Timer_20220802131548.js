import { useEffect, useState } from "react";

export default function Timer() {

    let [timer, setTimer] = useState(10);

    useEffect(() => {
        setTimer(timer - 1);
    }, [timer]);

    return (
        <div className="container">
            <button type="button" className="btn btn-primary">Start</button>
        </div>
    )



}