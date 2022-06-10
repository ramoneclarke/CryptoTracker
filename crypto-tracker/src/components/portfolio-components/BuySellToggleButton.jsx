import {
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.1),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const BuySellToggleButton = ({ step, setStep }) => {
  const handleType = (event, newStep) => {
    if (newStep !== null) {
      setStep(newStep);
    }
  };
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          border: (theme) => `1px solid ${theme.palette.primary.dark}`,
          flexWrap: "wrap",
          width: "15rem",
          mb: 1,
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          value={step}
          exclusive
          fullWidth
          onChange={handleType}
          aria-label="transaction type"
          color="secondary"
        >
          <ToggleButton
            value={2}
            aria-label="buy"
            disableFocusRipple
            sx={{ color: "text.secondary" }}
          >
            <Typography>Buy</Typography>
          </ToggleButton>
          <ToggleButton
            value={3}
            aria-label="sell"
            disableFocusRipple
            sx={{ color: "text.secondary" }}
          >
            <Typography>Sell</Typography>
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </>
  );
};

export default BuySellToggleButton;