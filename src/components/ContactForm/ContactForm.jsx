import { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import { form, label, input, button } from "./ContactForm.module.scss";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  contactId = shortid.generate();

  handleInput = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  handleSubmit = (event) => {
    const { name, number } = this.state;

    event.preventDefault();

    this.props.onSubmit({ id: this.contactId, name, number });

    this.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={form} onSubmit={this.handleSubmit}>
        <label className={label} htmlFor={this.nameInputId}>
          Name
          <input
            className={input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleInput}
            id={this.nameInputId}
          ></input>
        </label>
        <label className={label} htmlFor={this.numberInputId}>
          Number
          <input
            className={input}
            type="text"
            name="number"
            value={number}
            onChange={this.handleInput}
            id={this.numberInputId}
          ></input>
        </label>
        <button className={button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
