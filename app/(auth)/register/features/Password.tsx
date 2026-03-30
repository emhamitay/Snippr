"use client";

import React from "react";
import Input, { InputStatus } from "@/app/components/Input";
import { isEmailAvailable } from "../../actions";

const MESSAGES: Partial<Record<InputStatus, string>> = {
  success: "Password Matches",
  error: "Passwords do not match",
  warning: "Password is too short",
};

const Password: React.FC = () => {

const [password, setPassword] = React.useState("");
const [confirmPassword, setConfirmPassword] = React.useState("");

  // validation the email on change (e.g., check length, format)
  function isTooShort(value: string): InputStatus | null {
    setPassword(value);
    if (value.length < 8) {
      return "warning";
    }
    return null;
  }
    
  function doPasswordsMatch(value: string): InputStatus | null {
    setConfirmPassword(value);
    if (password && value !== password) {
      return "error";
    }
    return null;
  }


  return (
    <>
      <Input
        id="password"
        name="password"
        label="Password"
        type="password"
        placeholder="At least 8 characters"
        onChange={isTooShort}
        messages={MESSAGES}
      />

      <Input
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm password"
        type="password"
        placeholder="••••••••"
        onChange={doPasswordsMatch}
        messages={MESSAGES}
      />
    </>
  );
};

export default Password;
