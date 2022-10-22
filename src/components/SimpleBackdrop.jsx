import React from 'react';
import {Backdrop, CircularProgress} from '@mui/material';

const SimpleBackdrop = ({open}) => {
  return (
    <div>
      {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default SimpleBackdrop;
