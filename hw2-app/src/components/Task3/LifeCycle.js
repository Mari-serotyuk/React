import React from "react";

class LifeCycle extends React.Component {
    state = {
        title: 'Home',
    };

    componentDidMount(){
        this.changeTitle()
    }

    componentDidUpdate() {
        this.changeTitle()
    }

    handleClick = (event) => this.setState({title: 'Contacts'});

    changeTitle = () => document.title = this.state.title;

    render(){
        
        return(
            <div>
                <button onClick={this.handleClick}>Push me</button>
            </div>
        )
    }
}

export default LifeCycle;