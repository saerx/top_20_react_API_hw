const SongDetails = ({title, artist, position, image, preview}) => {

    console.log(image)

    return (
        <>
            <li>
            <h2>{position+1}</h2>
            <img src={image} alt = {title}></img>
            <h3>{title}</h3>
            
            <p>{artist}</p>  
            <audio controls
                    src={preview}>
            </audio>  
            </li>
        </>
    )
}


export default SongDetails;