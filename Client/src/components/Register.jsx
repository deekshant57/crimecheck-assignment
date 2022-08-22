import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterHandler } from "../Redux/RegisterRedux/RegisterAction";
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
  });
  const userpattern = /[@#$%_ ]/; // regex

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
          Create Account Here
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
            label="enter username.."
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
                dispatch(RegisterHandler(input, navigate));
              }
            }}
          >
            Submit
          </Button>
        </Box>
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <Typography sx={{ marginTop: "10px", fontFamily: "sans-serif" }}>
            Click to Login
          </Typography>
        </Link>
      </Box>
    </>
  );
}
