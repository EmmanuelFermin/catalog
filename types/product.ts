export interface Product {
  productId: number;
  productName: string;
  productDesc: string;
  branch: string;
  branches: { name: string }[];
  brand: string;
  brands: { name: string }[] | null;
  merchantPartNumber: string;
  branchPartNumber: string;
  designation: string[];
  attributes: { name: string; value: string }[];
}
