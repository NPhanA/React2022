import { Component } from "react"

class StudentInfoTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        { id: 1, name: 'Nguyen Van A', age: 30, Address: 'Ha Noi' },
        { id: 2, name: 'Nguyen Phan Anh', age: 19, Address: 'Ha Noi' },
        { id: 3, name: 'John', age: 24, Address: 'England' },
        { id: 4, name: '田中', age: 18, Address: '東京' }
      ]
    }
  }

  renderTableData() {
    return this.state.students.map((student) => {
      return (
        <tr key={id}>
        <td >{id}</td>
        <td >{name}</td>
        <td >{age}</td>
        <td >{Address}</td>
      </tr>
        
      )
    })
  }
  renderTableHeader() {
    const header = Object.keys(this.state.students[0])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }
  render() {
    return (
      <table className="text-center">
        <tbody>
          <tr className="text-center">{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>
      </table>
    )
  }
}

export default StudentInfoTable;


