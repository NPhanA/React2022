import { Component } from "react"

 class StudentInfoTable extends Component{
    render(){
        const myStyle = {
            border: "1px",border:"solid"
        }
        return(
       <div>
        <table className="text-center" style={myStyle}>
  <tr>
    <th style={myStyle}>ID</th>
    <th style={myStyle}>Name</th>
    <th style={myStyle}>Age</th>
    <th style={myStyle}>Address</th>
  </tr>
  <tr>
    <td style={myStyle}>1</td>
    <td style={myStyle}>Nguyen Van A</td>
    <td style={myStyle}>30</td>
    <td style={myStyle}>Ha Noi</td>
  </tr>

</table></div>
    )
    }
    
    
}

export default StudentInfoTable;


