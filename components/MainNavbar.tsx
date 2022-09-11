import type { FC } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import Logo from "../assets/logo/Logo.png";
import MainNavIconButtons from "./MainNavIconButtons";
import MainDrawerItemIcons from "./MainDrawerItemIcons";
import MainResponsiveMenu from "./MainResponsiveMenu";

interface DrawerAppBarProps {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Tools", "Catalogs"];

const DrawerAppBar: FC<DrawerAppBarProps> = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [notifs, setNotifs] = useState<number>(1);
  const [checklists, setChecklists] = useState<number>(1);
  const [totalNotifs, setTotalNotifs] = useState<number>(0);

  useEffect(() => {
    setTotalNotifs(notifs + checklists);
  }, [checklists, notifs]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Centralized Catalog
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <MainDrawerItemIcons />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar component="nav" elevation={0}>
        <StyledToolbar>
          <StyledAvatar>
            <Image src={Logo} alt="Centralize Catalog" layout="fill" />
          </StyledAvatar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: {
                sm: "0.75rem",
                md: "0.85rem",
                lg: "1rem",
                xl: "1.4rem",
              },
              fontWeight: 500,
              display: { xs: "none", sm: "block" },
              ml: "10px",
            }}
          >
            Centralized Catalog
          </Typography>
          <SearchField
            id="outlined-basic"
            placeholder="Search"
            variant="outlined"
          />
          <MainResponsiveMenu
            onClick={handleDrawerToggle}
            totalNotifs={totalNotifs}
          />
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            {navItems.map((item) => (
              <NavButton
                key={item}
                sx={{
                  fontSize: { lg: "1rem", xl: "1.4rem" },
                  ml: { md: "11px", lg: "11px", xl: "31px" },
                }}
              >
                {item}
              </NavButton>
            ))}
            <MainNavIconButtons
              notifications={notifs}
              checklists={checklists}
            />
          </Box>
        </StyledToolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default DrawerAppBar;

const StyledToolbar = styled(Toolbar)`
  && {
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      && {
        padding-left: 34px;
        padding-right: 15px;
        min-height: 34px;
        background-color: red;
      }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      padding-left: 34px;
      padding-right: 30px;
      min-height: 44px;
      /* background-color: green; */
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      padding-left: 64px;
      padding-right: 45px;
      height: 54px;
      /* background-color: blue; */
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      padding-left: 64px;
      padding-right: 45px;
      height: 54px;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      padding-left: 64px;
      padding-right: 65px;
      height: 64px;
    }
    /* Extra Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1536px) {
      padding-left: 64px;
      padding-right: 65px;
      height: 74px;
    }
  }
`;

const StyledAvatar = styled(Avatar)`
  && {
    background-color: transparent;
    height: 34px;
    width: 34px;
  }
`;

const SearchField = styled(TextField)`
  && {
    background-color: #ffffff;
    margin-left: auto;
    & fieldset {
      height: 50px;
      border: none;
    }
    & input {
      font-size: 1.4375rem;
      color: #797777;
      &::placeholder {
        font-size: 1.4375rem;
        font-weight: 300;
        color: #797777;
        opacity: 0.9;

        /* PLACEHOLDER Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
          font-size: 1rem;
        }

        /* PLACEHOLDER Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          font-size: 1rem;
        }

        /* PLACEHOLDER Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 900px) {
          font-size: 1rem;
        }

        /* PLACEHOLDER Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          font-size: 1.2187rem;
        }

        /* PLACEHOLDER Extra Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1536px) {
          font-size: 1.4375rem;
        }
      }

      /* INPUT Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        width: 300px;
        font-size: 1rem;
        height: 1px;
      }

      /* INPUT Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        width: 300px;
        font-size: 1rem;
        height: 1px;
      }

      /* INPUT Large devices (laptops/desktops, 900px and up) */
      @media only screen and (min-width: 900px) {
        width: 250px;
        font-size: 1rem;
        height: 7px;
      }

      /* INPUT Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        width: 400px;
        font-size: 1.2187rem;
        height: 10px;
      }

      /* INPUT Extra Extra large devices (large laptops and desktops, 1536px and up) */
      @media only screen and (min-width: 1536px) {
        width: 630px;
        font-size: 1.4375rem;
        height: 15px;
      }
    }
  }
`;

const NavButton = styled(Button)`
  && {
    color: #0f0f0f;
    font-weight: 300;
    text-transform: none;
  }
`;
