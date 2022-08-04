import { useState, useEffect } from "react";

export default function SelectCar() {
    const carList = [
        { car: "" }
    ];
    const colorList = [
        { color: "" }
    ];
    let [selectedCar, setSelectedCar] = useState(carList[0], colorList[0]);
    let [selected, setSelected] = useState(0);
    const choice = e => {
        setSelectedCar(e.target.value);
    }

    useEffect(() => {
        switch (setSelected) {
            case "Ferrari":
                setSelectedCar("Ferrari");
                break;
            case "Mercedes":
                setSelectedCar("Mercedes");
                break;
            case "Kia":
                setSelectedCar("Kia");
                break;
            case "Ford":
                setSelectedCar("Ford");
                break;
            default:
        }
    }, [selectedCar]);



    return (
        <div>
            Car :
            <select onChange={e => {
                choice(e);
            }}>
                <option value="Ferrari">Ferrari</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Kia">Kia</option>
                <option value="Ford">Ford</option>
            </select>
            <h2>Your selected: {selectedCar}</h2>
            Car :
            <select onChange={e => {
                choice(e);
            }}>
                <option value="Ferrari">Ferrari</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Kia">Kia</option>
                <option value="Ford">Ford</option>
            </select>
            <h2>Your selected: {selectedCar}</h2>
        </div>
        </div>



            
    )
}

