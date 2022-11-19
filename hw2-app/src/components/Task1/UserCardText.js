export const UserCardText = ({userData}) =>{
    const {name, surname, age} = userData;
   
     return(
       <div>
         <p>
           My info: {name} {surname}, {age} years old
         </p>
       </div>
    )
}