import localFont from "next/font/local";
import { Inter, Kaisei_Decol } from "next/font/google";

export const sfPro = localFont({
  src: [
    { path: "./SF-Pro-Display-Regular.otf", weight: "400", style: "normal" },
    { path: "./SF-Pro-Display-Medium.otf", weight: "500", style: "normal" },
    { path: "./SF-Pro-Display-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-sf",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const kaisei = Kaisei_Decol({
  variable: "--font-kaisei",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
