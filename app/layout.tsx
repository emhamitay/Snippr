import React from "react";
import "./globals.css";

const RootLayout: React.FC = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <html>
        <header>
          <title>Snippr</title>
        </header>
        <body>
          <div className="bg-sky-50 w-full flex justify-center items-center h-screen">
            {children}
          </div>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
