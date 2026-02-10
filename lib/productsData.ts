export const productTabs = [
  { id: "pfs", label: "Pre-filled Syringe (PFS)" },
  { id: "pen", label: "Pen Injector" },
] as const;

export type ProductCategory = (typeof productTabs)[number]["id"];

export interface Product {
  id: string;
  name: string;
  brandName: string;
  genericName: string;
  category: ProductCategory;
  dosages: string[];
  description: string;
  form: string;
  frequency: string;
  logoImage: string;
  packsImage: string;
  deviceImage?: string;
  leafletPdf?: string;
}

export const products: Product[] = [
  {
    id: "seglu-pfs",
    name: "Seglu PFS",
    brandName: "Seglu",
    genericName: "Semaglutide",
    category: "pfs",
    dosages: ["0.25mg", "0.5mg", "1mg", "1.7mg", "2.4mg"],
    description:
      "Pre-filled syringe formulation of Semaglutide for once-weekly subcutaneous injection. Single dose prefilled syringe for convenient self-administration.",
    form: "Pre-filled Syringe",
    frequency: "Once weekly",
    logoImage: "/products/pfs/logo.png",
    packsImage: "/products/pfs/packs.png",
    deviceImage: "/products/pfs/syringe.png",
    leafletPdf: "/seglu-leaflet.pdf",
  },
  {
    id: "seglutide-pen",
    name: "Seglutide Pen",
    brandName: "Seglutide",
    genericName: "Semaglutide",
    category: "pen",
    dosages: ["2mg", "4mg"],
    description:
      "Multidose prefilled pen injector of Semaglutide for once-weekly subcutaneous injection. Each pen comes with disposable needles for multiple doses.",
    form: "Prefilled Pen Injector",
    frequency: "Once weekly",
    logoImage: "/products/pen/logo.png",
    packsImage: "/products/pen/packs.png",
    deviceImage: "/products/pen/device.png",
    leafletPdf: "/seglutide-leaflet.pdf",
  },
  {
    id: "seglutide-vial",
    name: "Seglutide Vial",
    brandName: "Seglutide",
    genericName: "Semaglutide",
    category: "pen",
    dosages: ["2mg", "4mg"],
    description:
      "Multi-dose vial formulation of Semaglutide for once-weekly subcutaneous injection. Solution for injection requiring separate syringe administration.",
    form: "Multi-dose Vial",
    frequency: "Once weekly",
    logoImage: "/products/vial/logo.png",
    packsImage: "/products/vial/packs.png",
  },
];

export const categoryLabels: Record<string, string> = Object.fromEntries(
  productTabs.map((tab) => [tab.id, tab.label])
);

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getAllProducts(): Product[] {
  return products;
}
