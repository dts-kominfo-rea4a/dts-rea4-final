import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Header from "./components/header/Header";

export default function App() {
  return (
    <>
      <Header />
      <CssBaseline />
      <Container>
        <Typography variant="h1" gutterBottom>
          Final Project Init
        </Typography>
      </Container>
    </>
  );
}
