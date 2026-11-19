import "./globals.css";

export const metadata = {
  title: "Polaris Advertising",
  description: "Media Promosi Percetakan Digital Polaris Advertising Kepanjen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}