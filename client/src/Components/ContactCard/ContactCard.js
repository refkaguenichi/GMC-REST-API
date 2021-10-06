import * as React from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { deleteContact } from "../../JS/actions/contacts";
import "./ContactCard.css";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  //Delete contact on click on the button
  const handleDelete = () => {
    let del = window.confirm("Are you sure to delete this contact!");
    if (del) {
      dispatch(deleteContact(contact._id));
    }
  };
  return (
    <Card sx={{ maxWidth: 200 }} className="one-contact">
      <img
        style={{ margin: "0 25%", width: "50%" }}
        src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/2x/external-user-interface-kiranshastry-gradient-kiranshastry-1.png"
        alt="avatar"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {contact.firstname} {contact.lastname || ""}
        </Typography>
        <div className="contact-infos">
          <Typography gutterBottom variant="p">
            <AlternateEmailIcon color="primary" variant="contained" />
            <span>{contact.email}</span>
          </Typography>
          <Typography gutterBottom variant="p">
            <FavoriteIcon color="primary" variant="contained" />
            {contact.favoriteFoods.map((el) => (
              <span>{el} </span>
            ))}
          </Typography>
        </div>
      </CardContent>
      <CardActions className="card-buttons">
        <Link to={`/edit/${contact._id}`}>
          <EditOutlinedIcon color="primary" />
        </Link>
        <DeleteOutlinedIcon color="primary" onClick={handleDelete} />
      </CardActions>
    </Card>
  );
};
export default ContactCard;
