import localFont from "next/font/local";
import "./globals.css";

const lightFont = localFont({
  src: "./fonts/Outfit-Light.ttf",
  variable: "--font-light",
  weight: "300", // Light weight
});

const regularFont = localFont({
  src: "./fonts/Outfit-Regular.ttf",
  variable: "--font-regular",
  weight: "400", // Regular weight
});

const mediumFont = localFont({
  src: "./fonts/Outfit-Medium.ttf",
  variable: "--font-medium",
  weight: "500", // Medium weight
});

const semiBoldFont = localFont({
  src: "./fonts/Outfit-SemiBold.ttf",
  variable: "--font-semibold",
  weight: "600", // SemiBold weight
});

const boldFont = localFont({
  src: "./fonts/Outfit-Bold.ttf",
  variable: "--font-bold",
  weight: "700", // Bold weight
});

export const metadata = {
  title: "Sandeep",
  description: "Software Developer - Sandeep Bansal, isandeepdev, isandeep.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lightFont.variable} ${regularFont.variable} ${mediumFont.variable} ${semiBoldFont.variable} ${boldFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
