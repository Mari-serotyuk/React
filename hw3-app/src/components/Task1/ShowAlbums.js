import React from "react";

const ShowAlbums = (props) => {

    return(
        
        <div>
            <ul>
                {props.data.map((prop) => (
                    <li
                    key={prop.id}>
                        Album: {prop.userId} - song {prop.id} - {prop.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShowAlbums;