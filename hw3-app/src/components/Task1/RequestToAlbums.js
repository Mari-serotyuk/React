import React from "react";

const RequestToAlbums = (Container) => {
    return class extends React.Component {
        state = {
            albums: [],
        }

        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/albums')
                .then(res => res.json())
                .then(
                    (res) => {this.setState({
                    albums: res, 
                    });
                }
            )
        };
    
        render() {

            return(
                
                <Container {...this.state} {...this.props} />
            )
        }
    }
}

export default RequestToAlbums;

