import './App.css';
import React from 'react';

//Task1

const UserCard = (props) => {
  return(
    <div>
      <div>User information:</div>
      <div>Name: {props.name}</div>
      <div>Surname: {props.surname}</div>
      <div>Age: {props.age}</div>
    </div>
  )
}

class App extends React.Component {
  state = {
    name: 'Ann',
    surname: 'Jonson',
    age: 29
  }
  
  render(){
    return (
      <div>
        <UserCard 
        name={this.state.name}
        surname={this.state.surname}
        age={this.state.age} /> 
      </div>
    );
  }
  
}

export default App;
