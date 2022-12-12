import React from "react";
import RequestToAlbums from "./RequestToAlbums";

export const DataContext = React.createContext();

class DataProvider extends React.Component {
   
    render() {

        return (
            
            <DataContext.Provider 
                value={this.props.albums}>
                {this.props.children}
            </DataContext.Provider>
        )
    }  
};

export default RequestToAlbums(DataProvider);