import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
});


export const metadata: Metadata = {
  title: "Kairos",
  description: "Gestión de Ventas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.className} ${robotoSlab.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}