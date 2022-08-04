export default function ButtonGroup(props) {
    return (
        <div className="btn-group mr-2 me-2" role="group" aria-label="First group">
            <button type="button" className={props.className}>Print</button>
            <button type="button" className={props.className}>↓</button>
        </div>
    )
}