import "./globals.css";
export const metadata = { title: "ROAR.Mining", description: "Roar mini app advanced UI" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">{children}</body>
    </html>
  );
}
