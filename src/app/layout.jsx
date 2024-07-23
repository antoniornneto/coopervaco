import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
});

export const metadata = {
  title: "Sistema de Atas",
  description: "Sistema de gerenciamento de atas, Coopervaço.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
