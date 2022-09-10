import React, { FC, Fragment } from "react";
import { Box, ListItem, Typography } from "@mui/material";
import styled from "styled-components";
import { useSelector } from "../../store";

type Branches = {
  branch: string;
  merchantPartNumber?: string;
  branchPartNumber?: string;
};

interface CatalogProps {
  productName: string;
  productDesc: string;
  merchant: string;
  merchantPartNumber: string;
  boldExactMerchantPartNumber?: boolean;
  boldAllMatchMerchantPartNumber?: boolean;
  isFilterSearchMerchantNum: boolean;
  branch: string;
  branches: Branches[];
  branchPartNumber: string;
  boldExactBranchPartNumber?: boolean;
  boldAllMatchBranchPartNumber?: boolean;
  isFilterSearchBranchNum: boolean;
}

const CatalogItem: FC<CatalogProps> = ({
  productName,
  productDesc,
  merchant,
  merchantPartNumber,
  boldExactMerchantPartNumber,
  boldAllMatchMerchantPartNumber,
  isFilterSearchMerchantNum,
  branch,
  branches,
  branchPartNumber,
  boldExactBranchPartNumber,
  boldAllMatchBranchPartNumber,
  isFilterSearchBranchNum,
}) => {
  const { isSubmitted } = useSelector((state) => state.filters);
  const currentBranch = "Your";

  let resultMsg: JSX.Element = <></>;
  let resultLocation: JSX.Element = <></>;

  const isCurrentBranchAndExactMerchantNumber =
    currentBranch === branch && boldExactMerchantPartNumber;

  const isCurrentBranchAndAllMatchBranchNumber =
    currentBranch === branch && boldAllMatchBranchPartNumber;

  const isNotCurrentBranchAndExactBranchNumber =
    currentBranch !== branch && boldExactBranchPartNumber;
  const isNotCurrentBranchAndAllMatchMerchantNumber =
    currentBranch !== branch && boldAllMatchMerchantPartNumber;

  // Prioritize Current Branch/Catalog MERCHANT
  if (
    (isFilterSearchMerchantNum &&
      isSubmitted &&
      isCurrentBranchAndExactMerchantNumber) ||
    isNotCurrentBranchAndAllMatchMerchantNumber
  ) {
    resultMsg = (
      <Fragment>
        <ResultMsg component="p">{`Manufacturer ${merchant} Part Number :`}</ResultMsg>
        <MerchantPartNum component="p" isfound={boldAllMatchMerchantPartNumber}>
          {merchantPartNumber}
        </MerchantPartNum>
      </Fragment>
    );
    resultLocation = (
      <ResultLocation component="p">
        {`Found in ${
          currentBranch === branch ? branch.toLowerCase() : branch
        } catalog and ${branches.length} ${
          branches.length > 1 ? "others" : "other"
        }`}
      </ResultLocation>
    );
  }

  // Prioritize Current Branch/Catalogs BRANCH
  if (
    (isFilterSearchBranchNum &&
      isSubmitted &&
      isCurrentBranchAndAllMatchBranchNumber) ||
    isNotCurrentBranchAndExactBranchNumber
  ) {
    resultMsg = (
      <Fragment>
        <ResultMsg component="p">{`${branch} catalog Part Number :`}</ResultMsg>
        <BranchPartNum component="p" isfound={boldAllMatchBranchPartNumber}>
          {branchPartNumber}
        </BranchPartNum>
      </Fragment>
    );

    if (isNotCurrentBranchAndExactBranchNumber) {
      resultLocation = (
        <ResultLocation component="p">
          {`Also found in ${branches.length} ${
            branches.length > 1 ? "others" : "other"
          } catalog`}
        </ResultLocation>
      );
    } else {
      resultLocation = (
        <ResultLocation component="p">
          {`Found in ${branch.toLowerCase()} catalog and ${branches.length} ${
            branches.length > 1 ? "others" : "other"
          }`}
        </ResultLocation>
      );
    }
  }

  return (
    <ListItem>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: {
              sm: "0.75rem",
              md: "0.85rem",
              lg: "1rem",
              xl: "1.47rem",
            },
            fontWeight: 500,
            mt: "33px",
          }}
        >
          {productName}
        </Typography>
        <Typography
          component="p"
          sx={{
            flexGrow: 1,
            fontSize: {
              sm: "0.75rem",
              md: "0.85rem",
              lg: "1rem",
              xl: "1.1rem",
            },
            fontWeight: 300,
            letterSpacing: "0.74px",
            color: "#797777",
            mt: "14px",
          }}
        >
          {productDesc}
        </Typography>
        {/* ----------------------------------- SEARCH RESULT ---------------------------------------- */}
        <ResultBox>{resultMsg}</ResultBox>
        {resultLocation}
      </Box>
    </ListItem>
  );
};

export default CatalogItem;

const ResultBox = styled(Box)`
  && {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 22.5px;
  }
`;

const ResultMsg = styled(Typography)`
  && {
    font-size: 1.1rem;
    font-weight: 300;
    color: #797777;
    letter-spacing: 0.74px;
  }
`;

const ResultLocation = styled(Typography)`
  && {
    font-size: 1.1rem;
    font-weight: 300;
    color: #797777;
    letter-spacing: 0.74px;
  }
`;

const MerchantPartNum = styled(Typography)`
  && {
    font-size: 1.1rem;
    font-weight: ${(props: any) => (props.isfound ? 500 : 300)};
    color: #797777;
    letter-spacing: 0.74px;
  }
`;

const BranchPartNum = styled(Typography)`
  && {
    font-size: 1.1rem;
    font-weight: ${(props: any) => (props.isfound ? 500 : 300)};
    color: #797777;
    letter-spacing: 0.74px;
  }
`;
