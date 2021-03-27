import { Component } from "react";
import PropTypes from "prop-types";
import { list, item, button } from "./ContactList.module.scss";

class ContactList extends Component {
  render() {
    const { contacts, onClick } = this.props;

    return (
      <ul className={list}>
        {contacts.map(({ name, number, id }) => (
          <li className={item} key={id}>
            <span>
              {name}: {number}
            </span>
            <button className={button} id={id} type="button" onClick={onClick}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
