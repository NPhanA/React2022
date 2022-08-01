import { Component } from "react"

 class StudentInfoTable extends Component{
    render(){
        return(
       <div>
        <table className="text-center" style={{border: "1px",border:"solid"}}>
  <tr>
    <th style={{}}>ID</th>
    <th style={{border: "1px",border:"solid"}}>Name</th>
    <th style={{border: "1px",border:"solid"}}>Age</th>
    <th style={{border: "1px",border:"solid"}}>Address</th>
  </tr>
  <tr>
    <td style={{border: "1px",border:"solid"}}>1</td>
    <td style={{border: "1px",border:"solid"}}>Nguyen Van A</td>
    <td style={{border: "1px",border:"solid"}}>30</td>
    <td style={{border: "1px",border:"solid"}}>Ha Noi</td>
  </tr>

</table></div>
    )
    }
    
    
}


