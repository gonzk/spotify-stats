import "./styles/TableRow.css"

export default function TableRowTracks(props) {
    
    const source = `https://open.spotify.com/embed/track/${props.id}?utm_source=generator`;
    return (
        <>
            <div className="column column__art"><a href={props.url} target="_blank"><img
                src={props.img}
                alt={props.name + " cover art"} /></a></div>
            <div className="column column__text">{props.name}</div>
            <div className="column column__text">{props.artist}</div>
            <div className="column column__audio">
                <iframe src={source} height="85" ></iframe>
            </div>
     
        </>
    )
}