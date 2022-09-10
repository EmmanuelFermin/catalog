export interface Product {
  productId: number;
  productName: string;
  productDesc: string;
  branch: string;
  branches: {
    branch: string;
    merchantPartNumber?: string;
    branchPartNumber?: string;
    designation?: string[];
  }[];
  brand: string | null;
  merchant: string;
  merchantPartNumber?: string;
  branchPartNumber?: string;
  designation: string[];
  attributes: { name: string; value: string }[];
}
