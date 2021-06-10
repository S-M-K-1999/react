import React from 'react';
import { render } from 'react-dom';

class ADDContact extends React.Component{
    state={
        name:"",
        email:"",
    }
    add =(e) =>{
        e.preventDefault();
        if (this.state.name=== " " || this.state.email=== " "){
            alert("all fields are essential");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: " ",email: " "});
        
    }
    render(){
        return(
            <div className='ui main'>
                <h2>add contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>name</label>                       
                        <input type='text'
                        name='name'
                        placeholder='name'
                        value={this.state.name}
                        onChange={(e)=>this.setState({name: e.target.value})}/>
                    </div>
                    <div className='field'>
                        <label>email</label>
                        <input type='email' name='email' placeholder='email'
                        value={this.state.email}
                        onChange={(e)=>this.setState({email: e.target.value})} />
                    </div>
                    <button className='ui button black'>add</button>
                </form>
            </div>
        );
    }
}
export default ADDContact;