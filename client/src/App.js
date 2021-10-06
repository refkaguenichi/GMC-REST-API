import { Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import ContactsList from "./Pages/ContactsList/ContactsList";
import AddContact from "./Pages/AddContact/AddContact";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={ContactsList} />
        <Route path={["/addContact", "/edit/:id"]} component={AddContact} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
