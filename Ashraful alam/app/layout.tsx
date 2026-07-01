import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { personal } from "@/data/portfolio";

const siteUrl = "https://ashrafulomi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${personal.name} — AI Engineer & Full Stack Developer`,
  description: personal.summary,
  keywords: [
    "Ashraful Alam Omi",
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Next.js Developer",
    "Competitive Programmer",
    "Bangladesh",
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} — AI Engineer & Full Stack Developer`,
    description: personal.summary,
    url: siteUrl,
    siteName: personal.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — AI Engineer & Full Stack Developer`,
    description: personal.summary,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = stored ?? (prefersDark ? 'dark' : 'light');
                if (theme === 'dark') document.documentElement.classList.add('dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
