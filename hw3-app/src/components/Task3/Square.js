import React from 'react';
import '../styles/square.css';

class Square extends React.Component {
    squareRef = React.createRef();

    componentDidMount() {
        setTimeout(() => {
            this.squareRef.current.className = 'translationSquare';
        }, 2000)
    }

    render() {
        return (

            <div
            ref={this.squareRef}
            className='square'>
            </div>
        )
    }
}

export default Square;