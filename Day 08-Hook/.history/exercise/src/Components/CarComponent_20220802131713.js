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
        let [valueSelected, setValueSelected] = useState("");
        const choice = e => {
            setSelectedCar(e.target.value);
        }
    
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
        
        return (
            <div>
            Khoá học :
            <select
            onChange={e => {
            choice(e);
            }}
            >
    <option value="0">Java</option>
    <option value="1">Angular</option>
    <option value="2">Javascript</option>
    <option value="3">Php</option>
    </select>
    <h2>Your selected: {valueSelected}</h2>
    </div>
    );
    
    }
    
    

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

