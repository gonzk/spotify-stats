import "./styles/TableRow.css"

export default function TableRowTracks(props) {
    
    return (
        <>
            <div className="column"><img
                src={props.img}
                alt={props.name + " cover art"}/></div>
            <div className="column column__text">{props.name}</div>
            <div className="column column__text">{props.artist}</div>
            <div className="column column__audio">
                <audio
                    controls
                    src={props.url}>
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
            </div>
     
        </>
    )
}