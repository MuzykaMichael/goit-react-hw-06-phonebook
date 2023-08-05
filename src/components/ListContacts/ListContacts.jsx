import propTypes from 'prop-types'
import { ContactsList } from "./ListContacts.styled";
import { Contact } from "components/Contact/Contact";
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ListContacts = (contacts) =>{
    const dispatch = useDispatch();
    const contactsDeleteHandler = idToDelete => {
        dispatch(deleteContact(idToDelete))
      }
        return(
            <ContactsList>
                {contacts.contacts.map(({name,number,id}) =>{
                    return(
                        <Contact
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDeleteContact={contactsDeleteHandler}
                        />
                    );
                })}
            </ContactsList>
        )
}


ListContacts.propTypes = {
    contacts: propTypes.arrayOf(
        propTypes.shape({
            name: propTypes.string.isRequired,
            number: propTypes.string.isRequired,
            id: propTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}