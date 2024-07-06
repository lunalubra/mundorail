import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Montserrat } from "next/font/google";
import "./global.css";
import StyledComponentsRegistry from "../lib/registry";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
