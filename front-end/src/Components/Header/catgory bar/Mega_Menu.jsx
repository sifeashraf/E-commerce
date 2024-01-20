import { AiOutlineDown } from "react-icons/ai";
import { useTheme, Button, Menu, MenuItem, Box } from "@mui/material";
import { useState } from "react";
export default function BasicMenu() {
  let theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mega-menu">
      <Box>
        <Button
          id="menu-0"
          aria-controls={open ? "menu-0" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: theme.palette.text.primary }}
          endIcon={<AiOutlineDown />}
        >
          Home
        </Button>
        <Menu
          id="menu-0"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "menu-0",
          }}
        >
          <MenuItem onClick={handleClose}>Main Page</MenuItem>
          <MenuItem onClick={handleClose}>New Actions</MenuItem>
          <MenuItem onClick={handleClose}>Anthor Actions</MenuItem>
        </Menu>
      </Box>
      <Box>
        <Button
          id="menu-1"
          aria-controls={open ? "menu-1" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: theme.palette.text.primary }}
          endIcon={<AiOutlineDown />}
        >
          User Account
        </Button>
        <Menu
          id="menu-1"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "menu-1",
          }}
        >
          <MenuItem onClick={handleClose}>Main Page</MenuItem>
          <MenuItem onClick={handleClose}>New Actions</MenuItem>
          <MenuItem onClick={handleClose}>Anthor Actions</MenuItem>
        </Menu>
      </Box>
      <Box>
        <Button
          id="menu-2"
          aria-controls={open ? "menu-2" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: theme.palette.text.primary }}
          endIcon={<AiOutlineDown />}
        >
          Vendor Account
        </Button>
        <Menu
          id="menu-2"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "menu-2",
          }}
        >
          <MenuItem onClick={handleClose}>Main Page</MenuItem>
          <MenuItem onClick={handleClose}>New Actions</MenuItem>
          <MenuItem onClick={handleClose}>Anthor Actions</MenuItem>
        </Menu>
      </Box>
      <Box>
        <Button
          id="menu-3"
          aria-controls={open ? "menu-3" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: theme.palette.text.primary }}
          endIcon={<AiOutlineDown />}
        >
          Pages
        </Button>
        <Menu
          id="menu-3"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "menu-3",
          }}
        >
          <MenuItem onClick={handleClose}>Main Page</MenuItem>
          <MenuItem onClick={handleClose}>New Actions</MenuItem>
          <MenuItem onClick={handleClose}>Anthor Actions</MenuItem>
        </Menu>
      </Box>
      <Box>
        <Button
          id="menu-4"
          aria-controls={open ? "menu-4" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: theme.palette.text.primary }}
          endIcon={<AiOutlineDown />}
        >
          Dashboard
        </Button>
        <Menu
          id="menu-4"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "menu-4",
          }}
        >
          <MenuItem onClick={handleClose}>Main Page</MenuItem>
          <MenuItem onClick={handleClose}>New Actions</MenuItem>
          <MenuItem onClick={handleClose}>Anthor Actions</MenuItem>
        </Menu>
      </Box>
      <Box>
        <Button
          id="menu-5"
          aria-controls={open ? "menu-5" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: theme.palette.text.primary }}
          endIcon={<AiOutlineDown />}
        >
          product
        </Button>
        <Menu
          id="menu-5"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "menu-5",
          }}
        >
          <MenuItem onClick={handleClose}>Main Page</MenuItem>
          <MenuItem onClick={handleClose}>New Actions</MenuItem>
          <MenuItem onClick={handleClose}>Anthor Actions</MenuItem>
        </Menu>
      </Box>
    </div>
  );
}
