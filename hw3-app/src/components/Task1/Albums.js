import React from "react";
import RequestToAlbums from "./RequestToAlbums";
import ShowAlbums from "./ShowAlbums";

class Albums extends React.Component {

    render() {

        const {albums} = this.props;

        return(

            <ShowAlbums data={albums}/>
        ) 
    }
};

export default RequestToAlbums(Albums);