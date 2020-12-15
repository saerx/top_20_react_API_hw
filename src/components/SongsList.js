import SongDetails from "./SongDetails"
import "./SongsList.css"


const SongsList = ({charts}) => {
    if (!charts) return null;

    const songsArray = charts.feed.entry


    const chartNodes = songsArray.map((song, index) => {
        // if (!songsArray) return null;
        return (
            <SongDetails 
            title={song["im:name"]["label"]} 
            artist={song["im:artist"]["label"]} position={index}
            image={song["im:image"][2]["label"]}
            preview={song["link"][1]["attributes"]["href"]}
            key={song["id"]["attributes"]["im:id"]}/>
        )
    });




    return (
        <>
            <ul>
            {chartNodes}
           
            </ul>
        </>
    )
}



export default SongsList;