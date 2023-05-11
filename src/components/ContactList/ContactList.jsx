import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import css from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, phone }) => (
        <li key={id} className={css.item}>
          <ContactItem name={name} phone={phone} id={id} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propType = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default ContactList;
