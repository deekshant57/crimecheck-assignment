import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { loginSuccessData } from "../Redux/LogInRedux/LogAction";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
  });
  const userpattern = /[@#$%&*_ ]/; //regex
  return (
    <>
      <Box
        sx={{
          width: "600px",
          height: "400px",
          margin: "auto",
          marginTop: "5%",
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: "InfoBackground",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "monospace",
            fontSize: "25px",
            marginBottom: "10%",
          }}
        >
          Login here from your username
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <TextField
            variant="outlined"
            label="Enter username..."
            sx={{ width: "60%", marginBottom: "20px" }}
            onChange={(e) => {
              setInput({ ...input, username: e.target.value });
            }}
          />
          <Button
            variant="contained"
            sx={{ width: "60%", height: "45px" }}
            onClick={() => {
              if (userpattern.test(input.username)) {
                alert("Please try using alphanumeric keywords");
              } else {
                dispatch(loginSuccessData(input, navigate));
              }
            }}
          >
            Submit
          </Button>
        </Box>
        <Link to={"/register"} style={{ textDecoration: "none" }}>
          <Typography sx={{ marginTop: "10px", fontFamily: "sans-serif" }}>
            Create New Account
          </Typography>
        </Link>
      </Box>
    </>
  );
}
