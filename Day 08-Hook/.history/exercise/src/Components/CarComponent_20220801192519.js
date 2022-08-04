import { useState } from "react";

export default function selectCar() {
    const carList = [
        { car: "" }
    ];
    const colorList = [
        { color: "" }
    ];
    let [selectedCar, setSelectedCar] = useState(carList[0], colorList[0]);

    setSelectedCar(previousState => {
        return {

        }
    });

    return (
        <div>
            Car :
            <select onChange={e => {
                setSelectedCar(e);
            }}>
                <option value="0">Ferrari</option>
                <option value="1">Mercedes</option>
                <option value="2">Kia morning</option>
                <option value="3">Ford</option>
            </select>
            <h2>Your selected: {selectedCar}</h2>
        </div>
    )
}

