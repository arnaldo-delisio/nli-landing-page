import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natural Language Business Intelligence | Talk to Your Data",
  description:
    "Stop switching between tools. Get instant answers from all your business systems through natural conversation—no dashboards, no SQL, no waiting.",
  keywords: [
    "business intelligence",
    "natural language",
    "data analytics",
    "Claude Desktop",
    "AI",
    "business data",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
