import React, { SyntheticEvent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import s from "features/main/main.module.css";

type Props = {
  value: string;
  label: string;
  onChange: (event: SyntheticEvent<Element, Event>, value: string | null) => void;
  options: any[];
};
export const Filter = ({ options, value, label, onChange }: Props) => {
  return (
    <Autocomplete
      value={value}
      onChange={onChange}
      className={s.filter}
      options={options}
      clearIcon={null}
      renderInput={(params) => <TextField {...params} variant="standard" label={label} />}
    />
  );
};
