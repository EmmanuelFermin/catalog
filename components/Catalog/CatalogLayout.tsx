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
      columns={{ xs: 13, sm: 15, md: 17, lg: 19, xl: 21 }}
    >
      <Grid item xs={13} sm={11} md={12} lg={13} xl={14}>
        <Catalog items={products} />
      </Grid>
      <Grid item xs={13} sm={4} md={5} lg={6} xl={7}>
        <Filters />
      </Grid>
    </Grid>
  );
};

export default CatalogLayout;
