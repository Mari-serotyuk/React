import React from 'react';
import { UserCard } from './UserCard';
import { UserCard2 } from './UserCard2';
import {UserCardText} from './UserCardText';
import {UserQuestAboutAge} from './UserQuestAboutAge';

class App extends React.Component {
  state = {
    name: 'Ann',
    surname: 'Jonson',
    age: 19
  }
  
  render(){

    return (
      <div>

        {/* props окремо */}
        <UserCard 
          name={this.state.name}
          surname={this.state.surname}
          age={this.state.age} 
        /> 

        {/* state цілий */}
        <UserCard2 userData={this.state}/>

        <UserCardText userData={this.state}/>

        <UserQuestAboutAge userData={this.state}/>
      
      </div>
    )  
  } 
}

export default App;