import "./styles/TableRow.css"

export default function TableRow(props) {
    
    return (
        <>
            <div className="column"><img
                src={props.img}
                alt={props.name + " cover art"}/></div>
            <div className="column column__text">{props.name}</div>
            <div className="column column__text">{props.artist}</div>
            <div className="column column__text">{props.time}</div>
     
        </>
    )
}