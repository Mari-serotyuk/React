export const UserCard = (props) => {
  
    return(
      <div>
        <div>User information:</div>
        <div>Name: {props.name}</div>
        <div>Surname: {props.surname}</div>
        <div>Age: {props.age}</div>
      </div>
    )
  }