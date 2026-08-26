import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Pukhraaj Corn Products | Whole Maize, Broken Maize, Corn Grit, Corn Flour & Cattle Feed", template: "%s | Pukhraaj Corn Products" },
  description: "Pukhraaj Corn Products by SCP supplies Whole Maize, Broken Maize, Corn Grit, Corn Flour and Cattle Feed to businesses across India, backed by a business legacy dating back to 1980.",
  metadataBase: new URL("https://pukhraajcornproducts.com"),
  openGraph: { title: "Pukhraaj Corn Products by SCP", description: "Quality Corn Products. Built on Generations of Trust.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
