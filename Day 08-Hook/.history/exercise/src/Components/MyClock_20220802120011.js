import useClock from '../Components/Clock';
import 
function MyClock() {
    //Gọi custom hook để sử dụng
    const [time, ampm] = useClock();
    return (
    <div id="Clock-style">
    {time}
    <span> {ampm}</span>
    </div>
    );
    }
    export default MyClock;