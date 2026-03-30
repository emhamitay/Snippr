'use client'

import React from 'react';
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { Login } from "../../actions"

const Form: React.FC = () => {
  return (
    <>
    <form action={Login} className="space-y-4">
        <Input
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
        />
        <Input
          comment="Forgot password?"
          commentLink="#"
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="••••••••"
        />

        <Button buttonType="submit">Sign in</Button>
      </form>
    </>
  );
};

export default Form;