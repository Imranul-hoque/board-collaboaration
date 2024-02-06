import { ConvexProvider } from "@/provider/convex-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import { ModalProvider } from "@/provider/modal-provider";
import { Suspense } from "react";
import { Loading } from "@/components/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real-Time | Collaboration",
  description: "Real time collaboration system with new tech named nextjs and tailwind css in backend we will use real time database and complete backend solutions named convex.",
  icons: [
    {
      href: '/logo.svg',
      url : '/logo.svg'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <ConvexProvider>
            <Toaster />
            <ModalProvider />
            {children}
          </ConvexProvider>
        </Suspense>
      </body>
    </html>
  );
}
