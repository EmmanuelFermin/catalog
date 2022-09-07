import type { FC } from "react";
import { useState } from "react";
import Image from "next/image";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from "@mui/icons-material/Menu";
import MenuCheckIcon from "../icons/MenuCheck";
import NotificationBellIcon from "../icons/NotificationBell";
import LogoutIcon from "../icons/Logout";
import Logo from "../assets/logo/Logo.png";
import styled from "styled-components";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Tools", "Catalogs"];

const DrawerAppBar: FC = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <ListItem key="Checked Menu" disablePadding>
          <ListItemButton
            aria-label="Checked Menu"
            sx={{ justifyContent: "center" }}
          >
            <StyledBadge color="secondary" badgeContent={1} max={99}>
              <MenuCheckIcon sx={{ fontSize: "1.3rem" }} />
            </StyledBadge>
          </ListItemButton>
        </ListItem>
        <ListItem key="Notification Bell" disablePadding>
          <ListItemButton
            aria-label="Notification Bell"
            sx={{ justifyContent: "center" }}
          >
            <StyledBadge color="secondary" badgeContent={1} max={99}>
              <NotificationBellIcon sx={{ fontSize: "1.45rem" }} />
            </StyledBadge>
          </ListItemButton>
        </ListItem>
        <ListItem key="Logout" disablePadding>
          <ListItemButton aria-label="Logout" sx={{ justifyContent: "center" }}>
            <LogoutIcon sx={{ fontSize: "1.45rem" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar component="nav" elevation={0}>
        <StyledToolbar>
          <Avatar
            sx={{ backgroundColor: "transparent", height: 34, width: 34 }}
          >
            <Image src={Logo} alt="Centralize Catalog" layout="fill" />
          </Avatar>
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              ml: { xs: "auto", sm: "1rem" },
              display: { sm: "block", md: "none" },
            }}
          >
            <StyledBadge color="secondary" badgeContent={2} max={99}>
              <MenuIcon />
            </StyledBadge>
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#0F0F0F",
                  fontSize: { lg: "1rem", xl: "1.4rem" },
                  fontWeight: 300,
                  textTransform: "none",
                  ml: { md: "11px", lg: "11px", xl: "31px" },
                }}
              >
                {item}
              </Button>
            ))}

            <IconButton
              aria-label="Checked Menu"
              sx={{ ml: { md: "26px", lg: "26px", xl: "36px" } }}
            >
              <StyledBadge color="secondary" badgeContent={1} max={99}>
                <MenuCheckIcon
                  sx={{
                    fontSize: { md: "1.225rem", lg: "1.225rem", xl: "1.55rem" },
                  }}
                />
              </StyledBadge>
            </IconButton>
            <IconButton aria-label="Notification Bell" sx={{ ml: "15px" }}>
              <StyledBadge color="secondary" badgeContent={1} max={99}>
                <NotificationBellIcon
                  sx={{
                    fontSize: { md: "1.4rem", lg: "1.4rem", xl: "1.8rem" },
                  }}
                />
              </StyledBadge>
            </IconButton>
            <IconButton aria-label="Logout" sx={{ ml: "12px" }}>
              <LogoutIcon
                sx={{ fontSize: { md: "1.3rem", lg: "1.3rem", xl: "1.6rem" } }}
              />
            </IconButton>
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
      padding-left: 34px;
      padding-right: 15px;
      min-height: 34px;
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
      /* background-color: orange; */
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      padding-left: 64px;
      padding-right: 65px;
      height: 64px;
      /* background-color: pink; */
    }
    /* Extra Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1536px) {
      padding-left: 64px;
      padding-right: 65px;
      height: 74px;
    }
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

const StyledBadge = styled(Badge)`
  && {
    & span {
      width: 80%;
      height: 80%;
      font-size: 18px;
      font-weight: 400;
      right: 1px;
      top: 1px;

      /* Large devices (laptops/desktops, 900px and up) */
      @media only screen and (min-width: 900px) {
        right: 0px;
        top: 0px;
      }

      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        right: 0px;
        top: 0px;
      }

      /* Extra Extra large devices (large laptops and desktops, 1536px and up) */
      @media only screen and (min-width: 1536px) {
        right: 1px;
        top: 1px;
      }
    }
  }
`;
