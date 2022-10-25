import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const ModalVideo = ({ label, videoKey, isOpen, closeHandler }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel={label}
      >
        <Box display={"flex"} padding={1}>
          <IconButton
            aria-label="close"
            onClick={closeHandler}
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          <iframe
            width={727}
            height={409}
            src={`https://www.youtube.com/embed/${videoKey}`}
            title={label}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Modal>
    </>
  );
};

export default ModalVideo;
