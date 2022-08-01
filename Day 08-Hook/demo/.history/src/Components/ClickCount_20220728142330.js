export default function clickCount(){
    const [count,setCount] = useState(0);
    <div className="container">
        <span >{count}</span>
        <button className="btn btn-primary btn-sm" onClick={() =>{setCount(count+1);}}>Increase by one</button>
    </div>
}   