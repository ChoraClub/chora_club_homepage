import { Poppins } from "next/font/google";
import localFonts from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const quanty = localFonts({
  src: [
    {
      path: "../fonts/quanty.ttf",
    },
  ],
  variable: "--font-quanty",
});

export const metadata = {
  metadataBase: new URL("https://app.chora.club/"),
  title: "Chora Club",
  description: "Discover. Learn. Engage.",
  icons: {
    icon: ["/favicon.png"],
  },
  openGraph: {
    title: "Chora Club",
    description: "Discover. Learn. Engage.",
    url: "https://app.chora.club/",
    siteName: "Chora Club",
    images: [
      {
        url: "https://gateway.lighthouse.storage/ipfs/QmZmWxpdhQZnag8HZtwZPLR5wtK2jjfgsTBMpNpmijtZ5x",
        width: 800,
        height: 600,
        alt: "img",
      },
      {
        url: "https://gateway.lighthouse.storage/ipfs/QmZmWxpdhQZnag8HZtwZPLR5wtK2jjfgsTBMpNpmijtZ5x",
        width: 1800,
        height: 1600,
        alt: "img",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, l, i) {
              w[l] = w[l] || []; w[l].push({
                  'gtm.start':
                      new Date().getTime(), event: 'gtm.js'
              }); var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                      'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-56VHGZ3X');
              `,
          }}
        ></script>
      </head>
      <body className={`${quanty.variable} ${poppins.variable}`}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-56VHGZ3X"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
          }}
        />
        {/* <Providers> */}
        <Navbar />
        {children}
        <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
