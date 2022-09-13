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
  IconButton,
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
import MainResponsiveFilter from "./MainResponsiveFilter";
import Filters from "../components/Catalog/Filters";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface DrawerAppBarProps {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Tools", "Catalogs"];

const DrawerAppBar: FC<DrawerAppBarProps> = (props) => {
  const { window } = props;
  const [mobileOpenMenu, setMobileOpenMenu] = useState<boolean>(false);
  const [mobileOpenFilter, setMobileOpenFilter] = useState<boolean>(false);
  const [notifs, setNotifs] = useState<number>(1);
  const [checklists, setChecklists] = useState<number>(1);
  const [totalNotifs, setTotalNotifs] = useState<number>(0);

  useEffect(() => {
    setTotalNotifs(notifs + checklists);
  }, [checklists, notifs]);

  const handleDrawerMenuToggle = () => {
    setMobileOpenMenu(!mobileOpenMenu);
  };

  const handleDrawerFilterToggle = () => {
    setMobileOpenFilter(!mobileOpenFilter);
  };

  const drawerMenu = (
    <Box onClick={handleDrawerMenuToggle} sx={{ textAlign: "center" }}>
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

  const drawerFilter = (
    <Box sx={{ textAlign: "left" }}>
      <IconButton
        aria-label="Drawer Filter"
        size="large"
        onClick={handleDrawerFilterToggle}
      >
        <CloseOutlinedIcon fontSize="inherit" />
      </IconButton>
      <Divider />
      <Box sx={{ p: { xs: "10px", sm: "10px" } }}>
        <Filters />
      </Box>
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
              fontSize: {
                sm: "0.75rem",
                md: "0.85rem",
                lg: "0.85rem",
                xl: "1.40625rem",
              },
              fontWeight: 500,
              display: { xs: "none", sm: "block" },
              ml: { xs: 0, sm: "10px" },
            }}
          >
            Centralized Catalog
          </Typography>
          <SearchField
            id="outlined-basic"
            placeholder="Search"
            variant="outlined"
          />
          <MainResponsiveFilter onClick={handleDrawerFilterToggle} />
          <MainResponsiveMenu
            onClick={handleDrawerMenuToggle}
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
                  fontSize: { md: "0.775rem", lg: "1rem", xl: "1.40625rem" },
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
          open={mobileOpenMenu}
          onClose={handleDrawerMenuToggle}
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
          {drawerMenu}
        </Drawer>
      </Box>

      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpenFilter}
          onClose={handleDrawerFilterToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 300,
            },
          }}
        >
          {drawerFilter}
        </Drawer>
      </Box>
    </Box>
  );
};

export default DrawerAppBar;

const StyledToolbar = styled(Toolbar)`
  && {
    padding-left: 64px;
    padding-right: 65px;
    height: 74px;

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      && {
        padding-left: 10px;
        padding-right: 15px;
        min-height: 34px;
      }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      && {
        padding-left: 34px;
        padding-right: 30px;
        min-height: 44px;
        /* background-color: green; */
      }
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      && {
        padding-left: 64px;
        padding-right: 45px;
        height: 54px;
        /* background-color: blue; */
      }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      && {
        padding-left: 64px;
        padding-right: 45px;
        height: 54px;
      }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      && {
        padding-left: 64px;
        padding-right: 65px;
        height: 64px;
      }
    }
    /* Extra Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1536px) {
      && {
        padding-left: 64px;
        padding-right: 65px;
        height: 74px;
      }
    }
  }
`;

const StyledAvatar = styled(Avatar)`
  && {
    background-color: transparent;
    height: 2.125rem;
    width: 2.125rem;
  }
`;

const SearchField = styled(TextField)`
  && {
    background-color: #ffffff;
    margin-left: auto;
    width: 39%;
    & fieldset {
      border: none;
    }
    & input {
      width: 100%;
      height: 0.9375rem;
      font-size: 1.4375rem;
      color: #797777;
      &::placeholder {
        font-size: 1.4375rem;
        font-weight: 300;
        color: #797777;
        opacity: 0.9;

        /* PLACEHOLDER Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
          & {
            font-size: 0.875rem;
          }
        }

        /* PLACEHOLDER Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          & {
            font-size: 0.875rem;
          }
        }

        /* PLACEHOLDER Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 900px) {
          & {
            font-size: 0.875rem;
          }
        }

        /* PLACEHOLDER Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          & {
            font-size: 1rem;
          }
        }

        /* PLACEHOLDER Extra Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1536px) {
          & {
            font-size: 1.4375rem;
          }
        }
      }

      /* INPUT Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        & {
          font-size: 0.875rem;
          height: 0.325rem;
        }
      }

      /* INPUT Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        & {
          font-size: 0.875rem;
          height: 0.325rem;
        }
      }

      /* INPUT Large devices (laptops/desktops, 900px and up) */
      @media only screen and (min-width: 900px) {
        & {
          font-size: 0.875rem;
          height: 0.325rem;
        }
      }

      /* INPUT Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        & {
          font-size: 1rem;
          height: 0.325rem;
        }
      }

      /* INPUT Extra Extra large devices (large laptops and desktops, 1536px and up) */
      @media only screen and (min-width: 1536px) {
        & {
          font-size: 1.4375rem;
          height: 0.9375rem;
        }
      }
    }

    /* SEARCH FIELD Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      & {
        margin-left: 10px;
        margin-right: 5px;
        width: 100%;
        font-size: 0.875rem;
      }
    }

    /* SEARCH FIELD Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      & {
        width: 28%;
        font-size: 0.875rem;
      }
    }

    /* SEARCH FIELD Extra Extra large devices (large laptops and desktops, 1536px and up) */
    @media only screen and (min-width: 900px) {
      & {
        width: 28%;
        font-size: 0.875rem;
      }
    }

    /* SEARCH FIELD Extra Extra large devices (large laptops and desktops, 1536px and up) */
    @media only screen and (min-width: 1200px) {
      & {
        width: 32%;
        font-size: 1rem;
      }
    }
    /* SEARCH FIELD Extra Extra large devices (large laptops and desktops, 1536px and up) */
    @media only screen and (min-width: 1536px) {
      & {
        width: 39%;
        font-size: 1.4375rem;
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
