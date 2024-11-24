import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

export const jetBrainsMono = localFont({ 
  src: [
    {
      path: './fonts/JetBrainsMonoNerdFont-Regular.ttf', 
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: "Reece Kalmar Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
