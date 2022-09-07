import React, { FC } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

interface ContainerBodyProps {
  children?: React.ReactNode;
}

const ContainerBody: FC<ContainerBodyProps> = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default ContainerBody;

const StyledContainer = styled(Box)`
  && {
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      padding-top: 40px;
      padding-left: 34px;
      padding-right: 15px;
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      padding-top: 44px;
      padding-left: 34px;
      padding-right: 30px;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      padding-top: 54px;
      padding-left: 64px;
      padding-right: 45px;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      padding-top: 54px;
      padding-left: 64px;
      padding-right: 45px;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      padding-left: 64px;
      padding-right: 65px;
      padding-top: 64px;
    }
    /* Extra Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1536px) {
      padding-top: 74px;
      padding-left: 64px;
      padding-right: 65px;
    }
  }
`;
