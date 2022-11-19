import React from 'react';

class Form extends React.Component {
state = {
    name: '',
    surname: '',
    error: ''
}

render() {

    return(
        <div>
            <form>
                <div>
                    <input placeholder='Name' name='name' value={this.state.name} />
                </div>
                <div>
                    <input placeholder='Surname' name='surname' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
}

export default Form;