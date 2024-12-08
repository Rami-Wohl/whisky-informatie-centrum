import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { LayoutWithNav } from "~/components/nav/layout-with-nav";

export const metadata: Metadata = {
  title: "WICN - Whisky Informatie Centrum Nederland",
  description:
    "Informatie en training over (Schotse) whisky, door Robin Brilleman.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body
        className="h-screen bg-black bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('../../../../assets/images/wood.jpg')",
        }}
      >
        <LayoutWithNav>{children}</LayoutWithNav>
      </body>
    </html>
  );
}
