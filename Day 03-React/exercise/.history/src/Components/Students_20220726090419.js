const students = [
    {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
]
function StudentTable() {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Company</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{students[0].company}</td>
                        <td>{students[0].contact}</td>
                        <td>{students[0].country}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>{students[1].company}</td>
                        <td>{students[1].contact}</td>
                        <td>{students[1].country}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>{students[2].company}</td>
                        <td>{students[2].contact}</td>
                        <td>{students[2].country}</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>{students[3].company}</td>
                        <td>{students[3].contact}</td>
                        <td>{students[3].country}</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>{students[4].company}</td>
                        <td>{students[4].contact}</td>
                        <td>{students[4].country}</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>{students[5].company}</td>
                        <td>{students[5].contact}</td>
                        <td>{students[5].country}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default StudentTable;