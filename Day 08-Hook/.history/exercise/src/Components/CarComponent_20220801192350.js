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
            Khoá học :
            <select
                onChange={e => {
                    setSelectedCar(e);
                }}
            >
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">Javascript</option>
                <option value="3">Php</option>
            </select>
            <h2>Your selected: {selectedCar}</h2>
        </div>
    )
}

