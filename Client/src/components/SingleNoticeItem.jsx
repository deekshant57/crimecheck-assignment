import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

export default function SingleNoticeItem({ text, username, date, time }) {
  return (
    <div>
      <Accordion sx={{ marginBottom: "30px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box
            sx={{
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Notice From {username}</Typography>
            <Typography
              variant="p"
              sx={{ fontFamily: "monospace", fontSize: "14px" }}
            >
              {" "}
              Submission Date : {date}
            </Typography>
            <Typography
              variant="p"
              sx={{ fontFamily: "monospace", fontSize: "14px" }}
            >
              Submission Time : {time}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{text}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
