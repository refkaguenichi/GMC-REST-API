import * as React from "react";
import { useEffect } from "react";
import { TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";
import Button from "@mui/material/Button";
import {
  addContact,
  editContact,
  getOneContact,
} from "./../../JS/actions/contacts";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import "./AddContact.css";

export default function AddContact() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const [contact, setContact] = React.useState({});
  const [edit, setEdit] = React.useState(false);
  const editContactState = useSelector((state) => state.contactReducer.contact);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (contact.email && contact.firstname) {
      if (edit) {
        dispatch(editContact(params.id, contact, history));
      } else {
        dispatch(addContact(contact, history));
      }
    } else {
      alert("Required Fields");
    }
  };
  useEffect(() => {
    dispatch(getOneContact(params.id));
  }, [params.id]);

  useEffect(() => {
    if (params.id) {
      setEdit(true);
    } else {
      setEdit(false);
    }
    edit
      ? setContact(editContactState)
      : setContact({ name: "", lastName: "", phone: "", email: "" });
  }, [edit, editContactState, params.id]);
  return (
    <form className="add-contact">
      <h2>{edit ? "EDIT The Contact" : "Add a new Contact"}</h2>
      <TextField
        required
        id="outlined-required"
        label="Firstname"
        onChange={handleChange}
        name="firstname"
        value={contact.firstname}
      />
      <TextField
        id="outlined-required"
        label="Lastname"
        onChange={handleChange}
        name="lastname"
        value={contact.lastname}
      />
      <TextField
        required
        id="outlined-required"
        label="Email"
        onChange={handleChange}
        name="email"
        value={contact.email}
      />
      <TextField
        id="outlined-required"
        label="Age"
        onChange={handleChange}
        name="age"
        value={contact.age}
      />
      <TextField
        id="outlined-required"
        label="Foods"
        onChange={handleChange}
        name="favoriteFoods"
        value={contact.favoriteFoods}
      />
      <Button
        variant="contained"
        size="small"
        color="primary"
        className="add-edit-button"
        onClick={handleClick}
      >
        {edit ? (
          <EditAttributesIcon variant="outlined" />
        ) : (
          <SaveOutlinedIcon />
        )}
      </Button>
    </form>
  );
}
