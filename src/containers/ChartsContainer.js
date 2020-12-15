import {useState, useEffect} from "react";

import SongsList from "../components/SongsList";

const ChartsContainer = () => {

    const [charts, setCharts] = useState(null);

    const getCharts = () => {
        console.log("getting charts info...");
        // Promise
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setCharts(data);
        })
    };

    useEffect(() => {
        getCharts();
    }, [])

    return (
        <>
            <h1>UK Top 20 Charts</h1>
            <SongsList charts={charts}/>
        </>
    )


}

export default ChartsContainer;