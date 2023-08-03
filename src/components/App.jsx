import { Form } from "./Form/Form";
import { ListContacts } from "./ListContacts/ListContacts";
import { Filtration } from "./Filtration/Filtration";
import {Container,
  FirstTitle,
  SecondTitle,
  Breaker,
  Message,} from './App.styled';
import { useState, useEffect } from "react";

export const App =()=> {
  const [contacts,setContacts] = useState(()=>
    JSON.parse(localStorage.getItem('contacts')) ?? [ ]);
  const [filter,setFilter] = useState('');
  useEffect (()=>{
    localStorage.setItem('contacts',JSON.stringify(contacts))
  },[contacts])

  const formSubmitHandle = newContact =>{
    const sameContact = contacts.find(
      ({name,number})=>name.toLowerCase()===newContact.name.toLowerCase() || number===newContact.number
    );
    if (sameContact) {
      alert(`${newContact.name} or ${newContact.number} is already exists.`)
      return
    }
    setContacts([...contacts,newContact])
  };




  
  const filterHandle = nameQuery => {
    setFilter(nameQuery);
  };

  const contactsDeleteHandler = idToDelete => {
    setContacts(()=>{
      const updContactsArr = [...contacts].filter(
        ({id}) => id!==idToDelete
      );
      return updContactsArr;

    });
  }





    const filteredContacts = Object.values(contacts).filter(({name})=>{
      return name.toLowerCase().includes(filter.toLowerCase())
    });

    return(
      <Container>
        <FirstTitle>Phonebook</FirstTitle>
        <Form onSubmit={formSubmitHandle}/>
        <SecondTitle>Contacts</SecondTitle>
        <Breaker>
          {contacts.length > 0 ? (
            <>
              <Filtration
              filtration={filter}
              onChange={filterHandle}
              />
              {filteredContacts.length > 0?(
                <ListContacts
                contacts={filteredContacts}
                handleDelete={contactsDeleteHandler}
                />
            
          ):(
            <Message>
              Sorry, we didn't find any contacts matching your query
            </Message>
          )}
          </>
          ):(
            <Message>You don't have any contacts yet</Message>
          )}
        </Breaker>
      </Container>
    );
};