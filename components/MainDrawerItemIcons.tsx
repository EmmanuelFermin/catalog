import React, { FC } from "react";
import { Badge, ListItem, ListItemButton } from "@mui/material";
import styled from "styled-components";
import MenuCheckIcon from "../icons/MenuCheck";
import NotificationBellIcon from "../icons/NotificationBell";
import LogoutIcon from "../icons/Logout";

const MainDrawerItemIcons: FC = (props) => {
  return (
    <>
      {" "}
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
    </>
  );
};

export default MainDrawerItemIcons;

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
        && {
          right: 0px;
          top: 0px;
        }
      }

      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        && {
          right: 0px;
          top: 0px;
        }
      }

      /* Extra Extra large devices (large laptops and desktops, 1536px and up) */
      @media only screen and (min-width: 1536px) {
        && {
          right: 1px;
          top: 1px;
        }
      }
    }
  }
`;
