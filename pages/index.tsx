import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import CatalogLayout from "../components/Catalog/CatalogLayout";
import { productApi } from "../__fakeApi__/productApi";
import type { Product } from "../types/product";

interface ProductProps {
  products: Product[];
}

const Home: NextPage<ProductProps> = ({ products }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  return (
    <>
      <Head>
        <title>Centralized Catalog</title>
        <meta name="description" content="Centralized Catalog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isAuthenticated ? <CatalogLayout products={products} /> : ""}
    </>
  );
};

export default Home;

//Hydrate page with DUMMY DATA and regenerate every 1 second on product update
export async function getStaticProps() {
  const data = await productApi.getProducts();

  return {
    props: {
      products: data,
    },
    revalidate: 1,
  };
}
