import { Component } from "react"

 class StudentInfoTable extends Component{  
    constructor(props) {
        super(props) 
        this.state = { 
           students: [
              { id: 1, name: 'Nguyen Van A', age: 30, Address: 'Ha Noi' },
              { id: 2, name: 'Ali', age: 19, Address: 'Ha Noi' },
              { id: 3, name: 'Saad', age: 16, Address: 'Ha Noi' },
              { id: 4, name: 'Asad', age: 25, Address: 'Ha Noi' }
           ]
        }
     }

     renderTableData() {
        return this.state.students.map((student) => {
          const { id, name, age, Address } = student
          return (
            
            <tr key={id}>
              <td style={{border: "1px",border:"solid"}}>{id}</td>
              <td style={{border: "1px",border:"solid"}}>{name}</td>
              <td style={{border: "1px",border:"solid"}}>{age}</td>
              <td style={{border: "1px",border:"solid"}}>{Address}</td>
            </tr>
          )
        })
      }
      renderTableHeader() {
        const header = Object.keys(this.state.students[0])
        return header.map((key, index) => <th key={index} style={{border: "1px",border:"solid"}}>{key.toUpperCase()}</th>)
      }
    render(){
        const myStyle = {
            border: "1px",border:"solid"
        }
        return(
            <table style={myStyle}>
            <tbody>
              <tr style={myStyle} className="text-center">{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
    )
    }
    
    
}

export default StudentInfoTable;


