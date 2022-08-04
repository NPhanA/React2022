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
            ...previousState

        }
    });

    return (
        <div>
            Car :
            <select onChange={e => {
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

