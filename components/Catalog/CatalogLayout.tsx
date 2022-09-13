import React, { FC, useState } from "react";
import Catalog from "./Catalog";
import Filters from "./Filters";
import { Grid } from "@mui/material";
import { Product } from "../../types/product";

interface CatalogLayoutProps {
  products: Product[];
}

const CatalogLayout: FC<CatalogLayoutProps> = ({ products }) => {
  return (
    <Grid
      sx={{ maxWidth: "100%" }}
      container
      spacing={0.5}
      columns={{ xs: 21, sm: 21, md: 21, lg: 15, xl: 21 }}
    >
      <Grid item xs={21} sm={14} md={14} lg={11} xl={14}>
        <Catalog items={products} />
      </Grid>
      <Grid item xs={21} sm={7} md={7} lg={4} xl={7}>
        <Filters />
      </Grid>
    </Grid>
  );
};

export default CatalogLayout;
