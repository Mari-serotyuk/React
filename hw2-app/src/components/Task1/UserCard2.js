export const UserCard2 = ({userData}) => {
    const {name, surname, age} = userData;

    return(
        <div>
          <div>User information:</div>
          <div>Name: {name}</div>
          <div>Surname: {surname}</div>
          <div>Age: {age}</div>
        </div>
      )
}