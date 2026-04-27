import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-foreground relative overflow-x-hidden">
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    {/* Global Medical Background */}
    <div className="fixed inset-0 -z-10 pointer-events-none">
      
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
      
      {/* Glow accents */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />

      {/* Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 
        [background-image:radial-gradient(circle_at_20px_20px,rgba(0,0,0,0.15)_1.5px,transparent_0)]
        dark:[background-image:radial-gradient(circle_at_20px_20px,rgba(255,255,255,0.15)_1.5px,transparent_0)]
        [background-size:40px_40px]"
      />
    </div>

    {children}
  </ThemeProvider>
</body>
    </html>
  );
}