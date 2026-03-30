'use client'

import React from 'react';
import Input, { InputStatus } from "@/app/components/Input";
import { isEmailAvailable } from "../../actions";

const MESSAGES : Record<InputStatus, string> = {
    success: "Email is available",
    error: "Email is taken",
    warning: "Invalid email format",
    checking: "Checking if email is available..."
}

const Email: React.FC = () => {

    // validation the email on change (e.g., check length, format)
    function handleEmailChange(value: string) : InputStatus | null {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if(!isValid) {
            // handle invalid email
            return "warning";
        }
        return null;
    }

  return (
    <>
    <Input
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="youremail@example.com"
            action={isEmailAvailable}
            onChange={handleEmailChange}
            messages={MESSAGES}
          />
    </>
  );
};

export default Email;