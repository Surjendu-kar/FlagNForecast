import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";

const API = "https://restcountries.com/v3.1/name";

const CONSTRANTS = {
  LOADING_TEXT: "Loading...",
  NO_RESULT: "No Country Found",
};

function Home() {
  const [userVal, setuserVal] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const userInput = e.target.value;
    const alphabeticRegex = /^[a-zA-Z\s]*$/;
    
    if (alphabeticRegex.test(userInput)) {
      setuserVal(userInput);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" && userVal.trim() !== "") {
      fetchApi();
    }
  }

  // fetch API
  const fetchApi = async () => {
    setStatus(CONSTRANTS.LOADING_TEXT);
    // console.log("press");
    try {
      const res = await fetch(`${API}/${userVal}`);
      const data = await res.json();
      if (res.ok) {
        // console.log(data);
        navigate("/details", { state: { country: data } });
      } else {
        setStatus(CONSTRANTS.NO_RESULT);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Grid container justifyContent="center">
        <TextField
          id="outlined-basic"
          label="Search Country"
          variant="outlined"
          onChange={inputHandler}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          value={userVal}
        />
        <Button
          onClick={fetchApi}
          variant="outlined"
          disabled={userVal.trim().length === 0}
        >
          Search
        </Button>
      </Grid>

      {status && (
        <Box mt={3}>
          <Typography
            color={status === CONSTRANTS.LOADING_TEXT ? "green" : "red"}
            fontWeight={600}
          >
            {status}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default Home;
