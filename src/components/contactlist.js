import React from 'react';
import ContactCard from './ContactCard';

  const Contactlist =(props) =>{
    console.log(props);
    const deletcontacthandler = (id) =>{
      props.getContactId(id);
    };
    const renderContactlist = props.contacts.map((contacts) =>{
        return <ContactCard contacts={contacts} clickHandler={deletcontacthandler}></ContactCard>;
        
    });
    return(
        <div className='ui celled list'>
            {renderContactlist}
        </div>
    );
      
  }
  export default Contactlist