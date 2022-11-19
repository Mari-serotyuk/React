import React from 'react';

class Form extends React.Component {
state = {
    name: '',
    surname: '',
    error: ''
}

onSubmit = (event) => {
    event.preventDefault();

    if((!this.state.name) || (!this.state.surname)) {
        this.setState({
            error: 'Введіть свої дані'
        })
    }else if ((this.state.name.length < 3) || (this.state.surname.length < 3)) {
        this.setState({
            error: 'З вашими даними щось пішло не так'
        })
    }else{
        this.setState({
            error: `Вітаємо, ${this.state.name} ${this.state.surname}`,
            name: '',
            surname: ''
        });
    }

    console.log(this.state.name, this.state.surname)
};

changeNameValue = (event) => {
    this.setState({name: event.target.value});

    this.setState({
        error: ''
    })
}

changeSurnameValue = (event) => {
    this.setState({surname: event.target.value});

    this.setState({
        error: ''
    })
};


render() {

    return(
        <div>
            <form onSubmit={this.onSubmit}>
                <div>
                    <input 
                    placeholder='Name' 
                    name='name' 
                    value={this.state.name}
                    onChange={this.changeNameValue} />
                </div>
                <div>
                    <input 
                    placeholder='Surname' 
                    name='surname'
                    value={this.state.surname} 
                    onChange={this.changeSurnameValue}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
}

export default Form;