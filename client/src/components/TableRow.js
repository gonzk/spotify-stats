import "./styles/TableRow.css"

export default function TableRow(props) {
    const date = new Date(props.time);
    
    return (
        <>
            <div className="column column__art"><a href={props.url} target="_blank"><img
                src={props.img}
                alt={props.name + " cover art"} /></a></div>
            <div className="column column__text">{props.name}</div>
            <div className="column column__text">{props.artist}</div>
            <div className="column column__text">{date.toString()}</div>
        </>
    )
}