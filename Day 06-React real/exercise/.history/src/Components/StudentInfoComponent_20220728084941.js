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
        return this.state.students.map((student, index) => {
          const { id, name, age, Address } = student
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{Address}</td>
            </tr>
          )
        })
      }
      renderTableHeader() {
        const header = Object.keys(this.state.students[0])
        return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
      }
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


