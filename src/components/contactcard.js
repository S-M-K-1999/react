import React from 'react';
import user from '../images/585e4bf3cb11b227491c339a.png'


const ContactCard = (props) => {
    const {id,name,email} = props.contacts;
    return(
        <div className="item">
                <div className='content'>
                    <img className='ui avatar image' src={user} alt='user'></img>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                    <i className='trash alternate outline icon'
                    style={{color:'red',marginTop:'1rem'}}
                    onClick = {() => props.clickHandler(id)}></i>
            </div>
    );

    
}
export default ContactCard