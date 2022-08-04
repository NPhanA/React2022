import { useState } from "react";

export default function selectCar(){
const carList=[
    {car:"",color:""}
];
const colorList=[];
let [selectedCar, setSelectedCar] = useState(carList[0]);

setSelectedCar(previousState => { return { 
    selectedCar: previousState.color = ""; 

}});

    return(
<div></div>
    )
}

