import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import { Suspense } from "react";
import { Container, Nav } from "@/components/layout";

export const metadata = {
  title: "Muhammad Bhaska",
  description: "Muhammad Bhaska's personal website, blog, and portofolio",
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bhaska",
    description: "Muhammad Bhaska's personal website, blog, and portofolio",
    creator: "@mhmdbhsk",
  },
  metadataBase: new URL("https://bhsk.my.id"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed -z-10 h-screen w-full bg-[#111010]" />

        <div className="flex min-h-screen w-full">
          <Suspense fallback="...">
            {/* @ts-expect-error Server Component */}
            <Nav />
          </Suspense>

          <div className="flex flex-1">
            <Container>{children}</Container>
          </div>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
