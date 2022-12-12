import { useEffect, useState } from "react";
import React from "react";
import ShowAlbums from "../Task1/ShowAlbums";

const AlbumsHook = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(res => setAlbums(res));
    }, []);

    return(
        
        <ShowAlbums data={albums}/>
    )
}

export default AlbumsHook;