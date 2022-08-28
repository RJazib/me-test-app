import React from 'react';
import { Button } from '@mui/material';

const CpButton = (props) => {
  const { label, disabled, onClick } = props

  return (
    <Button variant="contained"
      sx={{
        borderRadius: 2,
        backgroundColor: "#8810c4",
        width: "50px",
        padding: "7px 70px",
        fontSize: "15px"
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default CpButton;