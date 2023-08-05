import { Form } from "./Form/Form";
import { ListContacts } from "./ListContacts/ListContacts";
import { Filtration } from "./Filtration/Filtration";
import {Container,
  FirstTitle,
  SecondTitle,
  Breaker,
  Message,} from './App.styled';
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";

export const App =()=> {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)



    const filteredContacts = Object.values(contacts.contacts).filter(({name})=>{
      return name.toLowerCase().includes(filter.filter.toLowerCase())
    });

    return(
      <Container>
        <FirstTitle>Phonebook</FirstTitle>
        <Form />
        <SecondTitle>Contacts</SecondTitle>
        <Breaker>
          {contacts.contacts.length > 0 ? (
            <>
              <Filtration
              filtration={filter.filter}
              />
              {filteredContacts.length > 0?(
                <ListContacts
                contacts={filteredContacts}
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