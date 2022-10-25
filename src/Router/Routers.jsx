import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegistForm from "../components/RegistForm";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Protect from "../components/Protect";
import { Typography } from "@mui/material";
import Detail from "../components/Detail";

function Routers(props) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Protect>
              <Navbar>
                <Home />
              </Navbar>
            </Protect>
          }
        />
        <Route
          path="/:id"
          element={
            <Protect>
              <Navbar>
                <Detail />
              </Navbar>
            </Protect>
          }
        />

        <Route path="login" element={<LoginForm />} />
        <Route path="registrasi" element={<RegistForm />} />
        <Route
          path="*"
          element={
            <main
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5rem",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography variant="h3">Page Tidak ada</Typography>
              <Link to="/">Silahkan Login</Link>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default Routers;
