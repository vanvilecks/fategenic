import "@/styles/main.css";
import { M_PLUS_1 } from "next/font/google";

const font = M_PLUS_1({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-m-plus-1",
  style: ["normal"],
});

export const metadata = {
  title: "Fategenic",
  description:
    "Fategenic is a tool designed to help Fate game players easily roll and modify Fate dice rolls, and also keep a record of their roll data history.",

  icons: {
    icon: "/favicon/favicon-32x32.png",
    apple: [
      { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon/favicon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/favicon/favicon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    other: {
      rel: "/favicon/favicon-32x32.png",
      url: "/favicon/favicon-32x32.png",
    },
  },
  manifest: "/manifest.webmanifest",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="fz_uFKIXypfGpQ0fRdf3u97dMQugheBmymlPg7fuApc"
        />
      </head>
      <body
        className={`${font.variable} px-safe overflow-auto bg-white px-10 pt-10 font-sans dark:bg-black  md:pt-24 lg:overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
