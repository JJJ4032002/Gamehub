import React from "react";
import { Stack } from "@mui/material";

function Form({ header, formContent }) {
  return (
    <Stack sx={{ width: { xs: "100%", md: "80%", sm: "100%" } }} spacing={3}>
      {header}
      {formContent}
    </Stack>
  );
}

export default Form;
