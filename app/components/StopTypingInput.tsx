"use client";

import { useState , useEffect, useRef } from "react";

type InputProp = {
  id: string;
  name: string;
  type: "input" | "email" | "password";
  placeholder: string;
};

export type ActionCallback = (value: string) => unknown | Promise<unknown>

export function StopTypingInput({ inputProp , callback }: { inputProp: InputProp , callback: ActionCallback } ) {
  const [value, setValue] = useState("");
  const callbackRef = useRef(callback);
  const hasTyped = useRef(false);

  useEffect(() => { callbackRef.current = callback; }, [callback]);

  useEffect(() => {
    if (!hasTyped.current) return;
    const timeout = setTimeout(() => {
      callbackRef.current(value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>){
    hasTyped.current = true;
    setValue(e.target.value);
  }

  return (
    <>
      <input
        id={inputProp.id}
        name={inputProp.name}
        type={inputProp.type}
        autoComplete={inputProp.id}
        required
        placeholder={inputProp.placeholder}
        onChange={onChange}
        className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
      />
    </>
  );
}

export default StopTypingInput;
