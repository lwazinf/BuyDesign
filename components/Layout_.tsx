import Head from "next/head";
import React, { useEffect, useState } from "react";
interface Layout_Props {
  children: JSX.Element;
}

export const Layout_ = ({ children }: Layout_Props) => {
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center`}
    >
      <Head>
        <title>Buy Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}

      
    </div>
  );
};
