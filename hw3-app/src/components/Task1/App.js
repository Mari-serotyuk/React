import React from "react";
import Albums from "./Albums";
import DataProvider from './DataContext';
import  Context  from "./Context";

export default class App extends React.Component {

    render() {

        return(

            <div>
                <div>
                    <Albums/>
                </div>
                {/* <div>
                    <DataProvider>
                        <Context/>
                    </DataProvider>
                </div> */}
            </div>
        ) 
    }
                
};

         