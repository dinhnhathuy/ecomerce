import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Inter, Barlow, Roboto_Mono } from 'next/font/google';
import "./globals.css";
// ClerkProvider
import { ClerkProvider } from "@clerk/nextjs";

// metadata is used to set the title and description of the page
export const metadata: Metadata = {
  title: "LeoShop",
  description: "LeoShop is a multivendor ecommerce platform",
};

// font
const interFont = Inter({ subsets: ['latin'] });
const barlowFont = Barlow({ 
  subsets: ['latin'], 
  weight: ['500', '700', '800'],
  variable: '--font-barlow', 
});
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${barlowFont.variable} ${robotoMono.variable} ${interFont.className}`}
        >
          <ThemeProvider 
            attribute="class" 
            defaultTheme="Light"
            enableSystem 
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
