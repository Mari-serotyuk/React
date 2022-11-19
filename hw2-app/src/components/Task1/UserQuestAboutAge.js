export const UserQuestAboutAge = (prop) => {
    const {name,  age} = prop.userData;
    
    if(age < 18){

        return(
            <div>
                <p>Привіт, {name}, тобі {age} років. Я не можу тобі нічого налити</p>
            </div>
        )
    }else{

        return(
            <div>
                <p>Привіт, {name}, тобі {age} років. Я можу тобі що-небудь налити</p>
            </div>
        )
    }
};