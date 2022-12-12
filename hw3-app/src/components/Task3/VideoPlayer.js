import React from "react";
import Hours from './VideoPlayer/Hours.mp4';

class VideoPlayer extends React.Component {
    state = {
        duration: ''
    };

    videoRef = React.createRef();

    componentDidMount() {
        
    }


    start = () => {
        this.videoRef.current.play()
    }

    stop = () => {
        this.videoRef.current.pause()
    }

    render(){

        return (

            <div className="container">
                <video className="videocontainer"
                 src={Hours}
                 ref={this.videoRef}></video>
                <div>
                    <button 
                    onClick={this.start}
                    >Start</button>

                    <span value={this.state.duration}
                    ></span>

                    <button 
                    onClick={this.stop}
                    >Stop</button>
                </div>
                
            </div>
        )
    }

    
}

export default VideoPlayer;