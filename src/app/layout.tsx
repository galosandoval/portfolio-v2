import "~/styles/globals.css"
import { GeistSans } from "geist/font"
import { cn } from "~/lib/utils"
import { ThemeProvider } from "~/components/theme-provider"
import { SkipToContent } from "~/components/skip-to-content"
import { Toaster } from "~/components/ui/toaster"

// export const metadata = {
//   title: "Galo Sandoval",
//   description: "Galo Sandoval is a software engineer based in Los Angeles.",
//   icons: [{ rel: "icon", url: "/favicon.ico" }]
// }

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative bg-background font-sans leading-relaxed antialiased selection:bg-primary selection:text-foreground",
          GeistSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SkipToContent />

          {children}

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
