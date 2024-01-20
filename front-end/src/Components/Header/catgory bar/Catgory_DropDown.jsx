import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select, useTheme } from "@mui/material";

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      backgroundColor: "white",
      color: "black",
    },
  },
};

const actions = ["action one", "action two", "action three", "another action"];

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Choose Action Please</em>;
            }
            return selected.join(", ");
          }}
          variant="outlined"
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderColor: "blue !important",
          }}
        >
          <MenuItem disabled value="">
            <em>do nothing</em>
          </MenuItem>
          {actions.map((action) => (
            <MenuItem key={action} value={action}>
              {action}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
