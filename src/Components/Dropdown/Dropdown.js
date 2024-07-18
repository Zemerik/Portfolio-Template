import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled } from "@mui/material/styles";
import { MdHome } from "react-icons/md";

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  color: "#fff",
  "& .MuiListItemIcon-root": {
    color: "#fff",
  },
  "&:hover": {
    backgroundColor: "#303636",
    color: theme.palette.primary.contrastText,
    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.contrastText,
    },
  },
}));

const HomeIcon = styled(MdHome)(({ theme }) => ({
  fontSize: "1.5rem", // Adjust the size as desired
}));

export default function TemporaryDrawer() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = 0; // Adjust this value to offset any fixed headers/navigation bars
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const list = (anchor) => (
    <Drawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          width: 250,
          backgroundColor: "#1b1c1e",
          fontFamily: "Roboto Slab, serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          color: "#757576",
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {[
            { text: "Home", icon: <HomeIcon />, section: "start" },
            { text: "Skills", icon: <CodeIcon />, section: "skills-section" },
            { text: "Projects", icon: <WorkIcon />, section: "projects" },
            { text: "About", icon: <InfoIcon />, section: "about" },
            { text: "Contact", icon: <PhoneIcon />, section: "contact" },
          ].map((item) => (
            <CustomListItemButton
              key={item.text}
              disablePadding
              onClick={() => scrollToSection(item.section)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </CustomListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Button onClick={toggleDrawer("right", true)}>
          <MenuIcon style={{ color: "white" }} />
        </Button>
        {list("right")}
      </React.Fragment>
    </div>
  );
}
