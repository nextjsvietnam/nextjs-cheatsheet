import Favicon from "@/layouts/favicon";
import { Providers } from "./providers";
import "@/styles/global.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <Favicon />
      </head>
      <body className="text-foreground bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
