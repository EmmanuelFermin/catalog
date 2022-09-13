export type Branches = {
  branch: string;
  merchantPartNumber?: string;
  branchPartNumber?: string;
  designation: string[];
  attributes: string[];
};

export interface CatalogProps {
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
  designationRefIndex: number;
  designationRelevanceScore: number;
  attributes?: string;
  boldExactOrAllMatchAttributes: string[];
  attributesRefIndex: number;
  attributesRelevanceScore: number;
  isFilterSearchAttributes: boolean;
  indices?: [number[]];
}