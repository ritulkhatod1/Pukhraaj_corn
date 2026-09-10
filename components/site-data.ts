export const business = {
  phone: "+919617104944",
  phoneDisplay: "+91 96171 04944",
  altPhone: "+91 99819 25699",
  altPhoneLink: "+919981925699",
  contactPersonPhone: "+919893727376",
  contactPersonPhoneDisplay: "+91 9893727376",
  email: "pukhraajcornproducts@gmail.com",
  whatsapp: "https://wa.me/919617104944",
  address: "Sushil Cotton Processor\nManawar, Dist. Dhar - 454446\nMadhya Pradesh, India",
  hours: "Monday-Sunday\n9:00 AM - 6:00 PM IST",
};

export type Product = {
  slug: string;
  name: string;
  image: string;
  short: string;
  applications: string[];
  specifications: string[];
  packaging: string[];
  cta: string;
  seoTitle: string;
  seoDescription: string;
};

export const products: Product[] = [
  {
    slug: "whole-maize",
    name: "Whole Maize",
    image: "/products/Whole Maize.png",
    short: "Carefully selected and machine-cleaned premium yellow maize, offering consistent quality for food processing and industrial applications.",
    applications: ["Nachos & tortilla chips", "Corn starch", "Liquid glucose", "Sorbitol", "Corn milling", "Maize-based derivatives"],
    specifications: ["Selected yellow maize", "Machine cleaned", "Uniform & mature kernels", "Low foreign matter", "Customized quality parameters available"],
    packaging: ["50 kg PP woven bags", "Bulk packaging available", "Customized packaging on request"],
    cta: "Enquire About Whole Maize",
    seoTitle: "Whole Maize | Pukhraaj Corn Products",
    seoDescription: "Premium yellow maize, carefully selected and machine-cleaned for food processing and industrial applications.",
  },
  {
    slug: "broken-maize",
    name: "Broken Maize",
    image: "/products/Broken Maize.png",
    short: "Precisely processed broken maize with uniform granulation, designed for consistent performance across snack, cereal and food-processing applications.",
    applications: ["Extruded snacks", "Corn flakes", "Makka poha", "Breakfast cereals", "Food processing"],
    specifications: ["Available in 2-4 mm & 4-6 mm", "Uniform granulation", "Clean & processed", "Customized sizes available"],
    packaging: ["25 kg / 50 kg PP woven bags", "Customized packaging available"],
    cta: "Enquire About Broken Maize",
    seoTitle: "Broken Maize | Pukhraaj Corn Products",
    seoDescription: "Precisely processed broken maize with uniform granulation for snack, cereal and food-processing applications.",
  },
  {
    slug: "corn-grit",
    name: "Corn Grit",
    image: "/products/Corn Grit.png",
    short: "High-quality corn grit produced from selected maize, delivering uniform particle size and reliable performance for snack and extrusion industries.",
    applications: ["Extruded snacks", "Puff snacks", "Namkeen", "Snack pellets", "Food processing"],
    specifications: ["Available in 101 & 108 grades", "Uniform particle size", "Consistent quality", "Customized mesh & granulation available"],
    packaging: ["25 kg / 50 kg PP woven bags", "Customized packaging available"],
    cta: "Enquire About Corn Grit",
    seoTitle: "Corn Grit | Pukhraaj Corn Products",
    seoDescription: "High-quality corn grit produced from selected maize for snack, extrusion and food-processing applications.",
  },
  {
    slug: "corn-flour",
    name: "Corn Flour",
    image: "/products/Corn Flour.png",
    short: "Finely milled corn flour with a smooth and consistent texture, suitable for a wide range of food-processing applications.",
    applications: ["Bakery products", "Tortillas", "Namkeen", "Food preparations", "Processed food products"],
    specifications: ["Finely milled", "Uniform texture", "Consistent quality", "Customized mesh size available"],
    packaging: ["25 kg / 50 kg PP woven bags", "Customized packaging available"],
    cta: "Enquire About Corn Flour",
    seoTitle: "Corn Flour | Pukhraaj Corn Products",
    seoDescription: "Finely milled corn flour with a smooth and consistent texture for food-processing applications.",
  },
  {
    slug: "cattle-feed",
    name: "Cattle Feed",
    image: "/products/Cattle Feed.png",
    short: "Nutritious maize-based cattle feed providing a valuable source of energy to support balanced nutrition and milk production.",
    applications: ["Dairy cattle feed", "Livestock nutrition", "Feed formulation", "Energy-rich feed ingredient"],
    specifications: ["Maize-based feed material", "Good source of energy", "Consistent quality", "Suitable for cattle-feed formulations"],
    packaging: ["50 kg PP woven bags", "Bulk supply available", "Customized packaging on request"],
    cta: "Enquire About Cattle Feed",
    seoTitle: "Cattle Feed | Pukhraaj Corn Products",
    seoDescription: "Maize-based cattle feed providing an energy-rich feed ingredient for cattle-feed formulations.",
  },
];

export const milestones = [
  {
    year: "1980",
    title: "TRADING OF COTTON",
    copy: "Foundation of quality and farmer partnerships established by Rameshchandra Khatod.",
    stat: "BUSINESS JOURNEY BEGINS",
    image: "https://images.unsplash.com/photo-1594731884638-819fd546778c?auto=format&fit=crop&w=1100&q=85",
  },
  {
    year: "1995",
    title: "LAVESH UDYOG",
    copy: "Started processing with 6 charkhas, producing approximately 30 bales/day.",
    stat: "6 CHARKHAS\n30 BALES/DAY",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1100&q=85",
  },
  {
    year: "2007",
    title: "RISHABH COTTON",
    copy: "Expanded capacity to 18 charkhas, reaching approximately 150 bales/day.",
    stat: "18 CHARKHAS\n150 BALES/DAY",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?auto=format&fit=crop&w=1100&q=85",
  },
  {
    year: "2019",
    title: "SUSHIL COTTON",
    copy: "Modernization with 24 charkhas, achieving approximately 220 bales/day capacity.",
    stat: "24 CHARKHAS\n220 BALES/DAY",
    image: "https://images.unsplash.com/photo-1581091215367-59ab6b30f550?auto=format&fit=crop&w=1100&q=85",
  },
  {
    year: "2021",
    title: "UJJWAL AGENCY",
    copy: "Diversified into grain trading: maize, soybean, chickpeas and wheat.",
    stat: "GRAIN TRADING",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1100&q=85",
  },
  {
    year: "2023",
    title: "CHICKPEA GRADING PLANT",
    copy: "Installed advanced grading technology capable of achieving up to 99.99% purity.",
    stat: "UP TO 99.99%\nPURITY",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1100&q=85",
  },
  {
    year: "2025",
    title: "PUKHRAAJ CORN PRODUCTS",
    copy: "Launch of an FSSAI-certified, state-of-the-art corn grit manufacturing facility.",
    stat: "PUKHRAAJ\nCORN PRODUCTS",
    image: "https://images.unsplash.com/photo-1601315488950-3c127c487c7d?auto=format&fit=crop&w=1100&q=85",
  },
] as const;
