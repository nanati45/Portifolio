import SideBar from "./components/SideBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <SideBar />

        <div className="flex-grow ">{children}</div>
      </body>
    </html>
  );
}
