import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";

const NewsModal = ({ newsModalOpen, newsContent, handleModalClose }) => {
  return (
    <Modal
      open={newsModalOpen}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
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
          {newsContent?.description}
        </Typography>
        <Link
          color="secondary"
          href={newsContent?.url}
          underline="none"
          target={"_blank"}
          sx={{ p: 3 }}
        >
          Go to Source
        </Link>
      </Box>
    </Modal>
  );
};

export default NewsModal;
