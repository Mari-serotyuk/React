import { DataContext } from "../Task1/DataContext";
import ShowAlbums from "../Task1/ShowAlbums";
import React from "react";

const UseContext = () => {
    const context = React.useContext(DataContext)

    return(

        <ShowAlbums data={context}/>
    )
}

export default UseContext;