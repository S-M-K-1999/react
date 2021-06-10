import React,{useState, useEffect} from 'react';
import './App.css';
import Header from "./Header";
import ADDContact from './ADDContact';
import Contactlist from './Contactlist';
import {uuid} from "uuidv4";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContancts]=useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContancts([...contacts, {id:uuid(), ...contact}]);
  };
  const removeContactHandler = (id)=>{
    const newContactlist = contacts.filter((contact) =>{
      return contact.id !== id;
    });
    setContancts(newContactlist);
  };





  useEffect(()=> {
    const retrivecontacts = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY));
    setContancts(retrivecontacts);
  },[]);
  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);
  
  return (
    <div className='ui container'>
      <Header />
      <ADDContact addContactHandler={addContactHandler}/>
      <Contactlist contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
};
export default App;
