import React from 'react';

class Form extends React.Component {
    state = {
        name: '',
        surname: '',
        error: ''
    }

    changeInputValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            error: ''
        });

    }



    onSubmit = (event) => {
        event.preventDefault()

        const {name, surname} = this.state;

        if((!name) || (!surname))  {
            this.setState({
                error: 'Введіть свої дані'
            })
        }else if ((name.length < 3) || (surname.length < 3)) {
            this.setState({
                error: 'З вашими даними щось пішло не так'
            })
        }else{
            alert(`Вітаємо, ${name} ${surname}`)
            this.setState({
                error: '',
                name: '',
                surname: '',
            });
            
        }
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
                        onChange={this.changeInputValue} />
                    </div>
                    <div>
                        <input 
                        placeholder='Surname' 
                        name='surname'
                        value={this.state.surname} 
                        onChange={this.changeInputValue}/>
                    </div>
                    {this.state.error && (<p>{this.state.error}</p>)}
                    <button type='submit' >Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;