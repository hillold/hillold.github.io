import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Divider,
  List,
  ListItem,
  Avatar,
} from "@mui/material";
import { MyCard } from "./Card";
import HomeIcon from "@mui/icons-material/Home";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";
import SchoolIcon from "@mui/icons-material/School";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { homePageData } from "../data/homePageData";
import ArticleIcon from "@mui/icons-material/Article";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const drawerWidth = 240;

const getIcon = (text: string) => {
  switch (text) {
    case "Home":
      return <HomeIcon />;
    case "Experience":
      return <WorkHistoryIcon />;
    case "Education":
      return <SchoolIcon />;
    case "Skills":
      return <DeveloperModeIcon />;
    case "Resume":
      return <ArticleIcon />;
    case "Contact":
      return <ContactMailIcon />;
    default:
      return <BatchPredictionIcon />;
  }
};

export function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Avatar
            alt="Hillol Debnath"
            src="./Hillol_Yosemite.jpg"
            sx={{ width: 75, height: 75, margin: "4px" }}
          />
          {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo'> */}
          {/* <EngineeringIcon sx={{ fontSize: 40 }} /> */}
          {/* </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hillol Debnath
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Resume</Button>
            <Button color="inherit">Contact</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ marginTop: "12px", overflow: "auto" }}>
          <List>
            {["Home", "Experience", "Skills", "Education", "Research"].map(
              (text, index) => (
                <ListItem key={text}>
                  <ListItemButton>
                    <ListItemIcon>{getIcon(text)}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {["Resume", "Contact"].map((text, index) => (
              <ListItem key={text}>
                <ListItemButton>
                  <ListItemIcon>{getIcon(text)}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <MyCard {...homePageData} />
      </Box>
    </Box>
  );
}
