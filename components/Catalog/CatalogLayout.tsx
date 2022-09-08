import React, { FC } from "react";
import Catalog from "./Catalog";
import Filters from "./Filters";
import { Grid } from "@mui/material";
import { Product } from "../../types/product";

interface CatalogLayoutProps {
  products: Product[];
}

const CatalogLayout: FC<CatalogLayoutProps> = ({ products }) => {
  return (
    <Grid container spacing={0.5} columns={21}>
      <Grid item xs={14}>
        <Catalog items={products} />
      </Grid>
      <Grid item xs={7}>
        <Filters />
      </Grid>
    </Grid>
  );
};

export default CatalogLayout;
