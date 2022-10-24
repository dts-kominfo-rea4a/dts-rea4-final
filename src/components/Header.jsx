import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import LogoutIcon from "@mui/icons-material/Logout";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = ({ typeHeader }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleTypeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = () => {
    navigate(`/search/${search}`);
    setSearch("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleSubmitSearch();
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <Box sx={{ display: "flex", gap: "10px" }}>
          <LogoutIcon color="secondary" />
          <Typography color="secondary" fontWeight="700">
            Logout
          </Typography>
        </Box>
      </Box>

      {typeHeader === "search" ? (
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "20px" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <FilterListIcon color="primary" />
            <FilterAltOutlinedIcon color="primary" />
          </Box>
          <TextField
            id="search"
            placeholder="Search"
            type="text"
            onInput={handleTypeSearch}
            onKeyUp={handleEnter}
            value={search}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
      ) : (
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <ArrowBackIcon color="primary"></ArrowBackIcon>
          <Typography color="primary" fontWeight="700">
            Back
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Header;
