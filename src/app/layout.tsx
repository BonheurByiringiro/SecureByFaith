import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonheur Byiringiro | Secure By Faith - AI Security & Cybersecurity",
  description: "AI Security Researcher & Cybersecurity Specialist - Using God-given talents to secure technology and protect digital communities. Specializing in AI/ML Security, Cloud Security, and Ethical AI Development.",
  keywords: ["AI Security", "Machine Learning", "Cybersecurity", "Cloud Security", "LLM Security", "Penetration Testing", "Ethical AI", "Christian Tech", "Digital Stewardship"],
  authors: [{ name: "Bonheur Byiringiro" }],
  openGraph: {
    title: "Bonheur Byiringiro | Secure By Faith",
    description: "AI Security Researcher & Cybersecurity Specialist - Using God-given talents to secure technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
