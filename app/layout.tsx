import React from "react";
import "./globals.css";

const RootLayout: React.FC = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <html>
        <head>
          <title>Snippr</title>
        </head>
        <body className="bg-slate-950">
          <div className="w-full min-h-screen">
            {children}
          </div>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
