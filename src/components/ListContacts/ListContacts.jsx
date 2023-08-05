import propTypes from 'prop-types'
import { ContactsList } from "./ListContacts.styled";
import { Contact } from "components/Contact/Contact";
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ListContacts = () =>{
    const contacts = useSelector(getContacts);

        return(
            <ContactsList>
                {contacts.contacts.map(({name,number,id}) =>{
                    return(
                        <Contact
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDeleteContact={deleteContact}
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
    handleDelete: propTypes.func.isRequired,
}