import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactCard from "../../Components/ContactCard/ContactCard";
import { getAllContacts } from "../../JS/actions/contacts";
import "./ContactsList.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const isLoad = useSelector((state) => state.contactReducer.isLoad);
  const isError = useSelector((state) => state.contactReducer.isError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  return (
    <div>
      {isLoad ? (
        <div className="loading">
          <CircularProgress color="primary" size={200} />
        </div>
      ) : isError ? (
        <div className="error-data">
          <img
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/data_error.png"
            alt="error"
          />
        </div>
      ) : !contacts.length ? (
        <h2 className="error-contact">There is no contacts!</h2>
      ) : (
        <div className="contacts">
          {contacts.map((el) => (
            <ContactCard contact={el} key={el._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;
