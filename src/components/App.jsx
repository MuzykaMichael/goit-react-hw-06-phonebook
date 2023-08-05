import { Form } from "./Form/Form";
import { ListContacts } from "./ListContacts/ListContacts";
import { Filtration } from "./Filtration/Filtration";
import {Container,
  FirstTitle,
  SecondTitle,
  Breaker,
  Message,} from './App.styled';
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { addContact, deleteContact } from "redux/contactsSlice";
import { addFilter } from "redux/filterSlice";

export const App =()=> {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  console.log(contacts.contacts[0].name)

  const formSubmitHandle = newContact =>{
    const sameContact = contacts.contacts.find(
      ({name,number})=>name.toLowerCase()===newContact.name.toLowerCase() || number===newContact.number
    );
    if (sameContact) {
      alert(`${newContact.name} or ${newContact.number} is already exists.`)
      return
    }
    dispatch(addContact(newContact))
  };




  
  const filterHandle = nameQuery => {
    dispatch(addFilter(nameQuery));
  };

  const contactsDeleteHandler = idToDelete => {
    dispatch(deleteContact(idToDelete))
  }



    const filteredContacts = Object.values(contacts.contacts).filter(({name})=>{
      return name.toLowerCase().includes(filter.filter.toLowerCase())
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