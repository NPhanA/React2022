import { useState, useState } from "react";

export default function Timer() {

    let [timer, setTimer] = useState(10);

    useEffect(() => {
        const setInterval = () => {
            setTimer(timer - 1);
        };
    }, [timer]);
   
        return (
            <div></div>
    )



}