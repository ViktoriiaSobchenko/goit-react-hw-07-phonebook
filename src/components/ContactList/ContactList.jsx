import { MdPermContactCalendar } from 'react-icons/md';
import { deleteContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
const getvisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  }
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
};
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = getvisibleContacts(contacts, filter);

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact, id) => (
        <li key={id} className={css.item}>
          <MdPermContactCalendar />
          <div className={css.wrapper}>
            <p className={css.text}>{contact.name}:</p>
            <p className={css.text}>{contact.phone}</p>
          </div>
          <button
            type="button"
            className={css.btn}
            id={contact.id}
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propType = {
  contacts: {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  },
};

export default ContactList;
