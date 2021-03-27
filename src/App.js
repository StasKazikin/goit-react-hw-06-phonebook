import { Component } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import INITIAL_STATE from "./initial_state.json";

class App extends Component {
  state = {
    contacts: [...INITIAL_STATE],
    filter: "",
  };

  componentDidMount() {
    // const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (newContact) => {
    const { contacts } = this.state;
    const sameContact = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (sameContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => {
      return { contacts: [...contacts, newContact] };
    });
  };

  deleteContact = (event) => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => id !== event.target.id),
      };
    });
  };

  changeFilter = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={filteredContacts} onClick={this.deleteContact} />
      </div>
    );
  }
}

export default App;
