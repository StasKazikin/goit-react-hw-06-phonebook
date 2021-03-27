import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

const App = () => {
  // componentDidMount() {
  //   // const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
