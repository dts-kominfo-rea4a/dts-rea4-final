// import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAddMessageMutation } from "../../service/movieApi";

const FormContact = ({ email }) => {
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const messageOnChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const emailOnChangeHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const [addMessage, result] = useAddMessageMutation();
  const submitHandler = (e) => {
    e.preventDefault();
    const newMsg = {
      UserId: !email ? userEmail : email,
      FullName: message,
    };
    addMessage(newMsg);
    alert("message sent!");
    setMessage("");
  };

  return (
    <Card>
      <CardContent>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                type="email"
                placeholder="Enter email"
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={emailOnChangeHandler}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={4}
                placeholder="Type your message here"
                variant="outlined"
                fullWidth
                required
                value={message}
                onChange={messageOnChangeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={submitHandler}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormContact;
