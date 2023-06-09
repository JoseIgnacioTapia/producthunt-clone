import StyledComponentsRegistry from "@/registry";
import { Metadata } from "next";
import { Albert_Sans, Roboto, Roboto_Mono } from "next/font/google";
import Header from "./components/Header";
import { GlobalStyle } from "./styles";

import FirebaseProvider from "@/firebase/context";

const albert_sans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
      type: "text/css",
    },
  ],
} as Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${albert_sans.variable} ${roboto_mono.variable}`}>
        <FirebaseProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Header />
            {children}
          </StyledComponentsRegistry>
        </FirebaseProvider>
      </body>
    </html>
  );
}
