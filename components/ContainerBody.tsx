import React, { FC } from "react";
import { Box, Container } from "@mui/material";
import styled from "styled-components";

interface ContainerBodyProps {
  children?: React.ReactNode;
}

const ContainerBody: FC<ContainerBodyProps> = (props) => {
  return <StyledContainer maxWidth="xl">{props.children}</StyledContainer>;
};

export default ContainerBody;

const StyledContainer = styled(Container)`
  && {
    max-width: 2500px;
    padding-top: 120px;
    padding-left: 64px;
    padding-right: 65px;

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      && {
        padding-top: 86px; // +46px (40px orig)
        padding-left: 34px;
        padding-right: 15px;
      }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      && {
        padding-top: 90px; // +46px (44px orig)
        padding-left: 34px;
        padding-right: 30px;
      }
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      && {
        padding-top: 80px;
        padding-left: 34px;
        padding-right: 40px;
      }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      && {
        padding-top: 80px;
        padding-left: 34px;
        padding-right: 40px;
      }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      && {
        padding-top: 110px; // + 46px (64px orig)
        padding-left: 64px;
        padding-right: 65px;
      }
    }
    /* Extra Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1536px) {
      && {
        padding-top: 120px; // + 46px (74px orig)
        padding-left: 64px;
        padding-right: 65px;
      }
    }
  }
`;
