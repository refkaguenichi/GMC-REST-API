import {
  GET_ALL_CONTACT,
  GET_ONE_CONTACT,
  GET_FAIL,
  GET_LOAD,
} from "../Constants/contacts";
import axios from "axios";

//@Get all contacts
export const getAllContacts = () => async (dispatch) => {
  dispatch({ type: GET_LOAD });
  try {
    let result = await axios.get("/api/contact");
    dispatch({ type: GET_ALL_CONTACT, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_FAIL });
  }
};

//@Delete contact by id
export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/${id}`);
    dispatch(getAllContacts());
  } catch (error) {
    dispatch({ type: GET_FAIL });
  }
};

//@Add new contact to the list
export const addContact = (contact, history) => async (dispatch) => {
  try {
    await axios.post("/api/contact/", contact);
    history.push("/contacts");
    dispatch(getAllContacts());
  } catch (error) {
    dispatch({ type: GET_FAIL });
  }
};

//@Edit one contact
export const getOneContact = (id) => async (dispatch) => {
  dispatch({ type: GET_LOAD });
  try {
    let result = await axios.get(`/api/contact/${id}`);
    dispatch({ type: GET_ONE_CONTACT, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_FAIL });
  }
};

export const editContact = (id, contact, history) => async (dispatch) => {
  try {
    await axios.put(`/api/contact/${id}`, contact);
    dispatch(getAllContacts());
    history.push("/contacts");
  } catch (error) {
    dispatch({ type: GET_FAIL });
  }
};
