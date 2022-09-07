import React, { FC } from "react";
import { Badge, IconButton } from "@mui/material";
import MenuCheckIcon from "../icons/MenuCheck";
import NotificationBellIcon from "../icons/NotificationBell";
import LogoutIcon from "../icons/Logout";
import styled from "styled-components";

interface MainNavIconButtonsProps {
  notifications: number;
  checklists: number;
}

const MainNavIconButtons: FC<MainNavIconButtonsProps> = (props) => {
  const { notifications, checklists } = props;
  return (
    <>
      <IconButton
        aria-label="Checked Menu"
        sx={{ ml: { md: "26px", lg: "26px", xl: "36px" } }}
      >
        <StyledBadge color="secondary" badgeContent={checklists} max={99}>
          <MenuCheckIcon
            sx={{
              fontSize: { md: "1.225rem", lg: "1.225rem", xl: "1.55rem" },
            }}
          />
        </StyledBadge>
      </IconButton>
      <IconButton aria-label="Notification Bell" sx={{ ml: "15px" }}>
        <StyledBadge color="secondary" badgeContent={notifications} max={99}>
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
    </>
  );
};

export default MainNavIconButtons;

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
