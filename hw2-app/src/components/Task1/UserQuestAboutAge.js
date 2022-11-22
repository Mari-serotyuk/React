export const UserQuestAboutAge = (prop) => {
    const {name,  age} = prop.userData;

    return(
        <div>
            <p>Привіт, {name}, тобі {age} років. Я {age < 18 ? 'не можу' : 'можу'}  тобі що-небудь налити</p>
        </div>
    )
};