import "./globals.css";

export const metadata = {
  title: "Faisal Ahmed",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white bg-[#020617]">
        {/* GLOBAL PREMIUM BACKGROUND */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {/* base vertical gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#020617_0%,#071226_45%,#020617_100%)]" />

          {/* emerald glow top-left */}
          <div className="absolute inset-0 bg-[radial-gradient(1000px_650px_at_12%_10%,rgba(16,185,129,0.28),transparent_55%)]" />

          {/* cyan glow top-right */}
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_88%_22%,rgba(56,189,248,0.18),transparent_55%)]" />

          {/* soft emerald bottom */}
          <div className="absolute inset-0 bg-[radial-gradient(800px_520px_at_50%_90%,rgba(52,211,153,0.14),transparent_60%)]" />

          {/* subtle vignette for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_40%,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
        </div>

        {children}
      </body>
    </html>
  );
}
