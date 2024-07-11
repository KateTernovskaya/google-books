import React from "react";
import { Button } from "@mui/material";

type Props = {
  title: string;
  onClick: () => void;
};
export const SuperButton = ({ title, onClick }: Props) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {title}
    </Button>
  );
};
