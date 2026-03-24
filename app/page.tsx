import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

function IndexPage() {

  const session = getServerSession();

  if(!session) redirect("/login");

  redirect("/app");

  return (
    <>
      <h1>Welcome to Snippr!</h1>
      <p>This is the home page of Snippr, your go-to app for managing and sharing code snippets.</p>
    </>
  );
};

export default IndexPage;