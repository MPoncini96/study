import "./globals.css";

export const metadata = {
  title: "School Vision",
  description: "A concept site for an all-male high school centered on discipline, scholarship, work, and spiritual formation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
