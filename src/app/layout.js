import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F14] text-gray-200">
        {children}
      </body>
    </html>
  );
}
