import React, { FC, Fragment, useEffect } from "react";
import { Box, ListItem, Typography } from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "../../store";
import { setVoidQuery } from "../../slices/filters";

type Branches = {
  branch: string;
  merchantPartNumber?: string;
  branchPartNumber?: string;
  designation: string[];
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
  designation?: string;
  boldExactOrAllMatchDesignation: string[];
  isFilterSearchDesignation: boolean;
  indices?: [number[]];
}

const superBoldMerchOrBranchNum = (
  query: string,
  mainText: string,
  indices: [number[]],
  isSuperBold?: boolean
): JSX.Element => {
  // Extracts query depending on the provided range
  const extractedQuery = mainText.slice(indices[0][0], indices[0][1] + 1);

  let remaining: string;
  let combined: JSX.Element = <></>;

  //Bolds the query located at the end of text
  if (indices[0][0] > 1) {
    remaining = mainText.slice(0, mainText.length - query.length);
    combined = (
      <>
        {query.length === mainText.length ? "" : remaining}
        <Box sx={{ fontWeight: `${isSuperBold ? 900 : 500}` }}>
          {extractedQuery}
        </Box>
      </>
    );
  } else {
    //Bolds the query located at the start of text
    remaining = mainText.slice(query.length - mainText.length, mainText.length);
    combined = (
      <>
        <Box sx={{ fontWeight: `${isSuperBold ? 900 : 500}` }}>
          {extractedQuery}
        </Box>
        {query.length === mainText.length ? "" : remaining}
      </>
    );
  }

  return combined;
};

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
  designation,
  boldExactOrAllMatchDesignation,
  isFilterSearchDesignation,
  indices,
}) => {
  const { isSubmitted, query } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const currentBranch = "Your";

  const countInArray = (array: string[], what: string) => {
    return array.filter((item) => item == what).length;
  };

  useEffect(() => {
    const checkQueryArr = query.split("");
    const isSpaceOccuredManyTimes = countInArray(checkQueryArr, " ") > 1;
    const checkIfLastIndexAnd2ndToLastIsSpace =
      checkQueryArr[checkQueryArr.length - 1] === " " &&
      checkQueryArr[checkQueryArr.length - 2] === " ";

    const isStartAndEndNotSpace =
      query.charAt(0) !== " " && query.charAt(query.length - 1) !== " ";
    const whiteSpaceWithin: string[] = [];

    if (isStartAndEndNotSpace) {
      query.split("").map((char) => {
        if (char === " ") {
          whiteSpaceWithin.push(char);
        }
      });
    }

    if (
      (checkIfLastIndexAnd2ndToLastIsSpace && isSpaceOccuredManyTimes) ||
      whiteSpaceWithin.length > 2
    ) {
      dispatch(setVoidQuery(true));
    }
  }, [dispatch, query]);

  const superBoldDesignation = (
    query: string,
    mainText: string,
    indices: [number[]],
    isSuperBold: boolean
  ) => {
    // Extracts query depending on the provided range
    let extractedQuery = mainText.slice(indices[0][0], indices[0][1] + 1);
    // let extractedQuery = mainText.slice(indices[0][0], query.length);
    let remaining: string;
    let combined: JSX.Element = <></>;

    //Bolds the query located at the end of text
    if (indices[0][0] > 1) {
      remaining = mainText.slice(0, mainText.length - query.length);
      combined = (
        <>
          {query.length === mainText.length ? "" : remaining}
          <Box sx={{ fontWeight: `${isSuperBold ? 900 : 500}` }}>
            {extractedQuery}
          </Box>
        </>
      );
    } else {
      //Bolds the query located at the start of text
      remaining = mainText.slice(
        query.length - mainText.length,
        mainText.length
      );
      console.log("QUERY LENGTH ", query.length);
      console.log("QUERY:", query.replace(" ", "_"));
      console.log("EXTRACTED QUERY:", extractedQuery.length);
      console.log("EXTRACTED QUERY:", extractedQuery);
      console.log("REMAINING:", remaining);
      console.log("COMBINED w/ query:", query + remaining);
      console.log("COMBINED w/ extracted query:", extractedQuery + remaining);
      console.log("Remaining has space in:", remaining.indexOf(" "));
      console.log(remaining.indexOf(" ") === 0);

      //If prefix of remaining is whitespace
      if (remaining.indexOf(" ") === 0) {
        remaining = "\xa0" + remaining.replace(" ", ""); // Maintains whitespace on prefix
      } else {
        //If mainText contains no whitespace
        remaining = mainText.slice(
          query.length - mainText.length,
          mainText.length
        );
        //If mainText contains whitespace
        if (mainText.includes(" ")) {
          remaining = mainText.slice(
            query.length - mainText.length,
            mainText.length
          );
        }
      }

      combined = (
        <>
          <Box
            sx={{
              fontWeight: `${isSuperBold ? 900 : 500}`,
            }}
          >
            {extractedQuery.replaceAll(" ", "\xa0")}
            {/* {extractedQuery} */}
          </Box>
          {query.length >= mainText.length ? "" : remaining}
        </>
      );
    }

    // If query is equal to designation and query length is greater
    if (query.length > mainText.length) {
      dispatch(setVoidQuery(true));
    } else {
      return combined;
    }
  };

  // Is IN CURRENT branch/catalog conditions ------------
  const isCurrentBranchAndExactMerchantNumber =
    currentBranch === branch && boldExactMerchantPartNumber;
  const isCurrentBranchAndAllMatchMerchantNumber =
    currentBranch === branch && boldAllMatchMerchantPartNumber;

  const isCurrentBranchAndExactBranchNumber =
    currentBranch === branch && boldExactBranchPartNumber;
  const isCurrentBranchAndAllMatchBranchNumber =
    currentBranch === branch && boldAllMatchBranchPartNumber;

  const isCurrentBranchAndExactDesignation =
    currentBranch === branch &&
    boldExactOrAllMatchDesignation.some((el) => el === designation);

  console.log(
    "CURRENT BRANCH AND EXACT DESIGNATION: ",
    isCurrentBranchAndExactDesignation
  );
  const isCurrentBranchAndAllMatchDesignation =
    currentBranch === branch && boldExactOrAllMatchDesignation.includes(query);

  // Is NOT CURRENT branch/catalog conditions ------------
  const isNotCurrentBranchAndExactMerchantNumber =
    currentBranch !== branch && boldExactMerchantPartNumber;
  const isNotCurrentBranchAndAllMatchMerchantNumber =
    currentBranch !== branch && boldAllMatchMerchantPartNumber;

  const isNotCurrentBranchAndExactBranchNumber =
    currentBranch !== branch && boldExactBranchPartNumber;
  const isNotCurrentBranchAndAllMatchBranchNumber =
    currentBranch !== branch && boldAllMatchBranchPartNumber;

  const isNotCurrentBranchAndExactDesignation =
    currentBranch !== branch &&
    boldExactOrAllMatchDesignation.some((el) => el === designation);
  const isNotCurrentBranchAndAllMatchDesignation =
    currentBranch !== branch && boldExactOrAllMatchDesignation.includes(query);

  let resultMsg: JSX.Element = <></>;
  let resultLocation: JSX.Element = <></>;
  // Result Message and Location MERCHANT ------------
  if (
    isFilterSearchMerchantNum &&
    isSubmitted &&
    (isCurrentBranchAndExactMerchantNumber ||
      isCurrentBranchAndAllMatchMerchantNumber ||
      isNotCurrentBranchAndExactMerchantNumber ||
      isNotCurrentBranchAndAllMatchMerchantNumber)
  ) {
    resultMsg = (
      <>
        <ResultMsg
          component="p"
          isExactlyFound={isCurrentBranchAndExactMerchantNumber}
        >{`Manufacturer ${merchant} Part Number :`}</ResultMsg>
        <MerchantPartNum component="p">
          {superBoldMerchOrBranchNum(
            query,
            merchantPartNumber,
            indices!,
            isCurrentBranchAndExactMerchantNumber
          )}
        </MerchantPartNum>
      </>
    );

    resultLocation = (
      <ResultLocation
        component="p"
        isExactlyFound={isCurrentBranchAndExactMerchantNumber}
      >
        {`Found in ${
          currentBranch === branch ? branch.toLowerCase() : branch
        } catalog and ${branches.length} ${
          branches.length > 1 ? "others" : "other"
        }`}
      </ResultLocation>
    );
  }

  // Result Message and Location BRANCH ------------
  if (
    isFilterSearchBranchNum &&
    isSubmitted &&
    (isCurrentBranchAndAllMatchBranchNumber ||
      isCurrentBranchAndExactBranchNumber ||
      isNotCurrentBranchAndExactBranchNumber ||
      isNotCurrentBranchAndAllMatchBranchNumber)
  ) {
    resultMsg = (
      <Fragment>
        <ResultMsg
          component="p"
          isExactlyFound={isCurrentBranchAndExactBranchNumber}
        >{`${branch} catalog Part Number :`}</ResultMsg>
        <BranchPartNum component="p">
          {superBoldMerchOrBranchNum(
            query,
            branchPartNumber,
            indices!,
            isCurrentBranchAndExactBranchNumber
          )}
        </BranchPartNum>
      </Fragment>
    );

    if (
      isNotCurrentBranchAndExactBranchNumber ||
      isNotCurrentBranchAndAllMatchBranchNumber
    ) {
      resultLocation = (
        <ResultLocation component="p">
          {`Also found in ${branches.length} ${
            branches.length > 1 ? "others" : "other"
          } catalog`}
        </ResultLocation>
      );
    } else {
      resultLocation = (
        <ResultLocation
          component="p"
          isExactlyFound={
            (isFilterSearchBranchNum || isFilterSearchMerchantNum) &&
            (isCurrentBranchAndExactMerchantNumber ||
              isCurrentBranchAndExactBranchNumber)
          }
        >
          {`Found in ${branch.toLowerCase()} catalog and ${branches.length} ${
            branches.length > 1 ? "others" : "other"
          }`}
        </ResultLocation>
      );
    }
  }

  // Result Message and Location DESIGNATION ------------
  if (
    isFilterSearchDesignation &&
    isSubmitted &&
    (isCurrentBranchAndExactDesignation ||
      isCurrentBranchAndAllMatchDesignation ||
      isNotCurrentBranchAndExactDesignation ||
      isNotCurrentBranchAndAllMatchDesignation)
  ) {
    resultMsg = (
      <Fragment>
        <ResultMsg
          component="p"
          isExactlyFound={Boolean(isCurrentBranchAndExactDesignation)}
        >{`${branch} catalog Designation :`}</ResultMsg>
        <Designation component="p">
          {superBoldDesignation(
            query,
            designation!,
            indices!,
            Boolean(isCurrentBranchAndExactDesignation)
          )}
        </Designation>
      </Fragment>
    );

    resultLocation = (
      <ResultLocation
        component="p"
        isExactlyFound={Boolean(isCurrentBranchAndExactDesignation)}
      >
        {`Found in ${branch.toLowerCase()} catalog and ${branches.length} ${
          branches.length > 1 ? "others" : "other"
        }`}
      </ResultLocation>
    );
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
            fontWeight: `${
              ((isFilterSearchBranchNum || isFilterSearchMerchantNum) &&
                (isCurrentBranchAndExactMerchantNumber ||
                  isCurrentBranchAndExactBranchNumber)) ||
              (isFilterSearchDesignation &&
                Boolean(isCurrentBranchAndExactDesignation))
                ? 400
                : 300
            }`,
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
    font-weight: ${(props: { isExactlyFound: boolean }) =>
      props.isExactlyFound ? 400 : 300};
    color: #797777;
    letter-spacing: 0.74px;
  }
`;

const ResultLocation = styled(Typography)`
  && {
    font-size: 1.1rem;
    font-weight: ${(props: { isExactlyFound: boolean }) =>
      props.isExactlyFound ? 400 : 300};
    color: #797777;
    letter-spacing: 0.74px;
  }
`;

const MerchantPartNum = styled(Typography)`
  && {
    font-size: 1.1rem;
    font-weight: 300;
    color: #797777;
    letter-spacing: 0.74px;
    display: flex;
  }
`;

const BranchPartNum = styled(Typography)`
  && {
    font-size: 1.1rem;
    font-weight: 300;
    color: #797777;
    letter-spacing: 0.74px;
    display: flex;
  }
`;

const Designation = styled(Typography)`
  && {
    font-size: 1.1rem;
    font-weight: ${(props: any) => (props.isfound ? 500 : 300)};
    color: #797777;
    letter-spacing: 0.74px;
    display: flex;
  }
`;
