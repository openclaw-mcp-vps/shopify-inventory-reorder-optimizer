import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Inventory Reorder Optimizer",
  description: "Auto-calculate optimal inventory reorder points. Analyze sales velocity, seasonality, and lead times to never stockout or overstock again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b132481b-50ab-4281-b562-ef3db4948817"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
