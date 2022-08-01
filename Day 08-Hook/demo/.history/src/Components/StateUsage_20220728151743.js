import { useState, useEffect } from "react";

export default function Selector() {
    let [selected, setSelected] = useState(0);
    let [valueSelected, setValueSelected] = useState("");
const choice = e =>{
    setSelected(e.target.value);
};





}