import PropTypes from "prop-types";
import { list, item, button } from "./ContactList.module.scss";
import actions from "../../redux/contacts/contacts-actions";
import { connect } from "react-redux";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={list}>
      {contacts.map(({ name, number, id }) => (
        <li className={item} key={id}>
          <span>
            {name}: {number}
          </span>
          <button
            className={button}
            id={id}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

const filterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filterContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
