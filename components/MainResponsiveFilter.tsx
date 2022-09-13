import React, { FC } from "react";
import { Badge, IconButton } from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

interface MainResponsiveFilterProps {
  onClick: () => void;
}

const MainResponsiveFilter: FC<MainResponsiveFilterProps> = ({ onClick }) => {
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
        <TuneOutlinedIcon />
      </IconButton>
    </>
  );
};

export default MainResponsiveFilter;
