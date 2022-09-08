import type { Product } from "../types/product";

class ProductsApi {
  getProducts(): Promise<Product[]> {
    const products: Product[] = [
      {
        productId: 1,
        productName:
          "Fibre Cable Tight Buffered MM 16 Fibre OM3 50/125 LSZH Eca Black (Dia) 7.8mm",
        productDesc:
          "Distribution or mini-break-out cable suitable for use in many indoor and outdoor applications. Features new and improved ES9 tight buffer. Typical applications include LAN and WAN backbones...",
        branch: "Current",
        branches: [
          { name: "Catalog1" },
          { name: "Catalog2" },
          { name: "Catalog3" },
          { name: "Catalog4" },
          { name: "Catalog5" },
        ],
        branchPartNumber: "60011222",
        brand: "M12312",
        brands: [{ name: "Sample" }],
        merchantPartNumber: "60019533",
        designation: ["indoor", "outdoor", "LAN", "WAN"],
        attributes: [
          { name: "OM3", value: "50/125" },
          { name: "MM", value: "16" },
          { name: "LSZH", value: "Eca Black" },
          { name: "Tight Buffer", value: "ES9" },
        ],
      },
      {
        productId: 2,
        productName:
          "DYNAmic Server Cabinet 47Ux6x10 Vented Vented Removable Adj Feet & Earth Kit",
        productDesc:
          "This standard series of Lande cabinets provides an ideal environment for housing server and IT equipment, available from 26U to 47U and up to 1200mm deep.",
        branch: "Current",
        branches: [{ name: "Catalog1" }, { name: "Catalog2" }],
        branchPartNumber: "DAT60019533",
        brand: "Lande",
        brands: [{ name: "Sample" }],
        merchantPartNumber: "60022333",
        designation: ["housing server", "IT equipment"],
        attributes: [
          { name: "Height", value: "26U" },
          { name: "Height", value: "47U" },
          { name: "Depth", value: "1000mm" },
          { name: "Depth", value: "1200mm" },
          { name: "Width", value: "600mm" },
          { name: "Option 1", value: "Adj Fee & Earth Kit" },
          { name: "Front Door", value: "Vented" },
          { name: "Side Panels", value: "Removable" },
        ],
      },
      {
        productId: 3,
        productName:
          "Cable Ties Metal Content Tie (MCT) Magnetic and X-Ray Detectable Blue",
        productDesc:
          "The metal content cable tie is designed for use in the food and pharmaceutical processing industries. A unique manufacturing process, involving the inclusion of a metallic pigment.",
        branch: "Comtec",
        branches: [
          { name: "Catalog1" },
          { name: "Catalog2" },
          { name: "Catalog3" },
          { name: "Catalog4" },
        ],
        branchPartNumber: "60019533",
        brand: "M00003",
        brands: [{ name: "Sample" }],
        merchantPartNumber: "60033444",

        designation: [
          "food processing industry",
          "pharmaceutical processing industry",
        ],
        attributes: [
          {
            name: "Features and Benefits",
            value: "Magnetic and x-ray detectable",
          },
          { name: "Colour", value: "Blue" },
          { name: "Material", value: "Metal Detectable Polypropylene (PPMP)" },
          { name: "Series", value: "MCT" },
        ],
      },
      {
        productId: 4,
        productName: "DSX2-5000 Cat6A DSX2-5000 INT",
        productDesc:
          "Fluke Networks DSX2-5000 copper cabling certifier. Tests up to TIA Cat6A or ISO/IEC Class FA. Full Cat5e/6 2-way autotest in 9 seconds. Full Cat6A. 2-way autotest in just 10 seconds. WiFi enabled",
        branch: "M23331",
        branches: [{ name: "Comtec" }, { name: "Catalog1" }],
        branchPartNumber: "60044555",
        brand: "Fluke Networks",
        brands: null,
        merchantPartNumber: "60019533LAO1",
        designation: ["network"],
        attributes: [
          {
            name: "Integrated WiFi",
            value: "IEEE 802.11 a/b/g/n; dual band (2.4 GHz and 5 GHz)",
          },
          {
            name: "Speed of autotest",
            value:
              "Full 2-way autotest of Cat5e/6: 9 seconds. Full Cat6A 2-way autotest: 10 seconds",
          },

          {
            name: "Capability of test",
            value: "up to TIA Cat6A or ISO/IEC Class FA",
          },
        ],
      },
    ];

    return Promise.resolve(products);
  }
}

export const productApi = new ProductsApi();
