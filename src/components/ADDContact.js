import React from 'react';
import { render } from 'react-dom';

class ADDContact extends React.Component{
    render(){
        return(
            <div className='ui main'>
                <h2>add contact</h2>
                <form className='ui form'>
                    <div className='field'>
                        <label>name</label>
                        <input type='text' name='name' placeholder='name' />
                    </div>
                    <div className='field'>
                        <label>email</label>
                        <input type='email' name='email' placeholder='email' />
                    </div>
                </form>
            </div>


        );

        
    }
}
export default ADDContact;