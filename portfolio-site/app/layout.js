import { Inter, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Harshvardhan Singh Chauhan — AI/ML Engineer",
  description:
    "Dual-degree Aerospace Engineering student with an AI minor at IIT Kharagpur — building full-stack ML systems, from RAG pipelines to quantitative trading models.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Machine Learning",
    "IIT Kharagpur",
    "Portfolio",
    "Harshvardhan",
  ],
  authors: [{ name: "Harshvardhan Singh Chauhan" }],
  openGraph: {
    title: "Harshvardhan Singh Chauhan — AI/ML Engineer",
    description:
      "Dual-degree Aerospace Engineering student with an AI minor at IIT Kharagpur — building full-stack ML systems.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${anton.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-body antialiased">
        {children}
      </body>
    </html>
  );
}
