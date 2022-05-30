import { Search } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import { useState } from "react";

const FilterSearchBar = ({ placeholder, setFilterText, ML, MB, width }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
    setFilterText(event.target.value);
  };

  const focusInputField = (input) => {
    if (input) {
      input.focus();
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: width,
        ml: ML,
        mb: MB,
      }}
      onSubmit={handleSubmit}
    >
      <IconButton>
        <Search sx={{ color: "text.secondary" }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        label="Filter"
        value={text}
        onChange={handleChange}
        ref={focusInputField}
        inputProps={{ "aria-label": "filter" }}
      />
    </Paper>
  );
};

export default FilterSearchBar;