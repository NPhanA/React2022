import { useState, useEffect } from "react";

export default function Selector() {
    let [selected, setSelected] = useState(0);
    let [valueSelected, setValueSelected] = useState("");
    const choice = e => {
        setSelected(e.target.value);
    };

    useEffect(() => {
        useEffect(() => {
            switch (selected) {
                case "0":
                    setValueSelected("Java");
                    break;
                case "1":
                    setValueSelected("Angular");
                    break;
                case "2":
                    setValueSelected("Javascript");
                    break;
                case "3":
                    setValueSelected("Php");
                    break;
                default:
            }
        }, [selected]);
    })
}

