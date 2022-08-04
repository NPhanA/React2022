import { useState, useEffect } from "react";

export default function SelectCar() {
    const carList = [
        { car: "" }
    ];
    const colorList = [
        { color: "" }
    ];
    let [selectedCar, setSelectedCar] = useState(carList[0], colorList[0]);
        let [valueSelected, setValueSelected] = useState("");
        const choice = e => {
            setSelectedCar(e.target.value);
        }
    
        useEffect(() => {
            switch (selected) {
            case "Ferrari":
            setValueSelected("Ferrari");
            break;
            case "Mercedes":
            setValueSelected("Mercedes");
            break;
            case "Kia":
            setValueSelected("Kia");
            break;
            case "Ford":
            setValueSelected("Ford");
            break;
            default:
            }
            }, [selected]);
    
    

    return (
        <div>
            Car :
            <select onChange={()=> {
                setSelectedCar(selectedCar);
            }}>
                <option value="Ferrari">Ferrari</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Kia">Kia</option>
                <option value="Ford">Ford</option>
            </select>
            <h2>Your selected: {selectedCar}</h2>
        </div>
    )
}

