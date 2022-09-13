import React, { FC } from "react";
import { Badge, IconButton } from "@mui/material";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

interface MainResponsiveMenuProps {
  onClick: () => void;
  totalNotifs: number;
}

const MainResponsiveMenu: FC<MainResponsiveMenuProps> = ({
  onClick,
  totalNotifs,
}) => {
  return (
    <>
    
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={onClick}
        sx={{
          ml: { xs: "0.1rem", sm: "1rem" },
          display: { sm: "block", md: "none" },
        }}
      >
        <StyledBadge color="secondary" badgeContent={totalNotifs} max={99}>
          <MenuIcon />
        </StyledBadge>
      </IconButton>
    </>
  );
};

export default MainResponsiveMenu;

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
