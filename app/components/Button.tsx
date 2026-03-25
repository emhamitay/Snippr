import React from "react";

type ButtonType = "submit" | "button" | "reset";

function Button({
  buttonType,
  children,
}: {
  buttonType: ButtonType;
  children: React.ReactNode;
}) {
  return (
    <>
      <button
        type={buttonType}
        className="w-full cursor-pointer rounded-lg bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-semibold text-sm py-2.5 transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        {children}
      </button>
    </>
  );
}

export default Button;
