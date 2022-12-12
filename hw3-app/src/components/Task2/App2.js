import React from 'react';
import AlbumsHook from './AlbumsHook';
import DataProvider from '../Task1/DataContext';
import UseContext from './UseContext';

const App2 = () => {
    
    return(
        
        <div>
            <div>
                <AlbumsHook/>
            </div>
            {/* <div>
                <DataProvider>
                    <UseContext/>
                </DataProvider>
            </div> */}
        </div>
    )
}

export default App2;