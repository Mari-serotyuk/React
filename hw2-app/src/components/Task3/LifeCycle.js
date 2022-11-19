import React from "react";

class LifeCycle extends React.Component {
    constructor(props) {
       super(props);
        this.state = {
            page: 'Home',
            title: 'Home page'
        };
    }

    componentDidUpdate(prevState) {
        if(this.state.title !== prevState){
            this.setState({title: 'Contacts page'})
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({page: 'Contacts'})
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleClick}>Push me</button>
            </div>
        )
    }
}

export default LifeCycle;