import React from "react";
import Stack from "@mui/material/Stack";
import { Alert } from "@mui/material";

type Props = {
  title: string | null;
};

export const AlertError = ({ title }: Props) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">{title}</Alert>
    </Stack>
  );
};
