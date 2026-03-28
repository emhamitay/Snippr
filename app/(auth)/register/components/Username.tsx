'use client'

import React from 'react';
import Input, { InputStatus } from "@/app/components/Input";
import { isUsernameAvailable } from "../actions";

const MESSAGES : Record<InputStatus, string> = {
    success: "Username is available",
    error: "Username is taken",
    warning: "Username is too short",
    checking: "Checking if username is available..."
}

const Username: React.FC = () => {

    // validation the username on change (e.g., check length, format)
    function handleUsernameChange(value: string) : InputStatus | null {
        if(value.length < 3) {
            // handle too short username
            return "warning";
        }
        return null;
    }

  return (
    <>
    <Input
            id="username"
            name="username"
            label="Username"
            type="text"
            placeholder="yourusername"
            action={isUsernameAvailable}
            onChange={handleUsernameChange}
            messages={MESSAGES}
          />
    </>
  );
};

export default Username;