import { useDispatch } from 'react-redux';
import { MdPermContactCalendar } from 'react-icons/md';
import { deleteContact } from '../../redux/operations';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(id));
  return (
    <>
      <MdPermContactCalendar />
      <div className={css.wrapper}>
        <p className={css.text}>{name}:</p>
        <p className={css.text}>{phone}</p>
      </div>
      <button
        type="button"
        className={css.btn}
        id={id}
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
