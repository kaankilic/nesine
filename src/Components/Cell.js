
function Cell({ children, onClick, value, selected = false }) {
    return (<div className={`cell ${selected ? 'selected' :''}`} onClick={onClick}>{ children }</div>)
}

export default Cell