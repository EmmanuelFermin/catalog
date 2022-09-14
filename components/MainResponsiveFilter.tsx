import React, { FC } from "react";
import { Badge, IconButton } from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { useSelector } from "../store";

interface MainResponsiveFilterProps {
  onClick: () => void;
}

const MainResponsiveFilter: FC<MainResponsiveFilterProps> = ({ onClick }) => {
  const { filterRequiredInResponsive } = useSelector((state) => state.filters);
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={onClick}
        sx={{
          pt: "12px",
          ml: { xs: "0.1rem", sm: "1rem" },
          display: { xs: "inline-flex", sm: "inline-flex", md: "none" },
        }}
      >
        <Badge
          color="error"
          variant="dot"
          invisible={filterRequiredInResponsive}
        >
          <TuneOutlinedIcon />
        </Badge>
      </IconButton>
    </>
  );
};

export default MainResponsiveFilter;
