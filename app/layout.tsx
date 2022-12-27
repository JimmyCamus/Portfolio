import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <head />
      <body>
        <div className="flex justify-center bg-white">
          <div className="lg:w-[75vw]">{children}</div>
        </div>
      </body>
    </html>
  );
}
