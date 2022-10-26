import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";

const PopUp = ({ showPopup, newsContent, popUpClose }) => {

  return (
    <Modal
      open={showPopup}
      onClose={popUpClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
            width: 500,
          bgcolor: "background.paper",
          border: "2px solid ",
          boxShadow: 24,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          
          p: 4,
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Summary
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, mb: 2 }}
        >
          {newsContent?.summary}
        </Typography>
        <Link
          color="secondary"
          href={newsContent?.url}
          underline="none"
          target={"_blank"}
          sx={{ p: 3 }}
        >
          Read More ...
        </Link>
      </Box>
    </Modal>
  );
};

export default PopUp;
