const notInCurrentCatalogAndIsFilterSearchInMerchantNumAndNotBranchNumWithExactQuery =
  (
    isFilterSearchMerchantNum: boolean,
    isFilterSearchBranchNum: boolean,
    isNotCurrentBranchAndExactMerchantNumber: boolean | undefined
  ): boolean => {
    if (
      isFilterSearchMerchantNum &&
      !isFilterSearchBranchNum &&
      isNotCurrentBranchAndExactMerchantNumber
    ) {
      return true;
    } else {
      return false;
    }
  };

export default notInCurrentCatalogAndIsFilterSearchInMerchantNumAndNotBranchNumWithExactQuery;
