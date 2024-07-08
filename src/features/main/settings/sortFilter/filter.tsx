import React, { SyntheticEvent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import s from "features/main/main.module.css";

type Props<T> = {
  label: string;
  value: T;
  onChange: (event: SyntheticEvent<Element, Event>, value: T | null) => void;
  options: T[];
};

export const Filter = <T extends string>({ label, value, onChange, options }: Props<T>) => {
  return (
    <Autocomplete<T>
      value={value}
      onChange={onChange}
      className={s.filter}
      options={options}
      clearIcon={null}
      renderInput={(params) => <TextField {...params} variant="standard" label={label} />}
    />
  );
};
