// import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import React, { useEffect } from "react";
import { auth } from "../../authentication/firebase";
import { useGetUserProfileQuery } from "../../service/movieApi";
import { useAuthState } from "react-firebase-hooks/auth";
import FormContact from "./FormContact";
import ListContact from "./ListContact";

export default function Setting() {
  const [user, loading] = useAuthState(auth);
  const { data, error, isLoading } = useGetUserProfileQuery();

  useEffect(() => {
    if (!error) {
      // data.map((dt, i) => console.log(dt));
    }
  }, [data]);

  return (
    <>
      <Grid alignItems="left">
        <FormContact email={user?.email} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ListContact list={data} />
      </Grid>
    </>
  );
}
