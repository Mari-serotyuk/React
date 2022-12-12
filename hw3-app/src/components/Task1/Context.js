import React from "react";
import { DataContext } from "./DataContext";
import  ShowAlbums  from "./ShowAlbums";

class Context extends React.Component {

    render() {

        return(   
                     
            <DataContext.Consumer>
                {(albums) => {

                    return(
                        <ShowAlbums data={albums}/>
                    )
                }}               
            </DataContext.Consumer>                     
        )
    }
}

export default Context;