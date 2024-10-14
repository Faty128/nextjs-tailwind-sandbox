// import localFont from "next/font/local";
import MainLayout from "@/components/MainLayout";
import "./globals.css";
import MenuContextProvider from "@/context/MenuContext";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Nextjs Tailwind SandBox",
  description: "This is a tutorial project from DevEmpower YouTube channel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <MenuContextProvider>
        <MainLayout>{children}</MainLayout>
      </MenuContextProvider>
      </body>
    </html>
  );
}

//  className={`${geistSans.variable} ${geistMono.variable}`}
